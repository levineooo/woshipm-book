const { chromium } = require('playwright');
const { MongoClient } = require('mongodb');
const pLimit = require('p-limit');

// Configuration
const CATEGORIES_TO_SCRAPE = [
  { name: 'marketing', url: 'https://www.woshipm.com/category/marketing' },
  { name: 'operate', url: 'https://www.woshipm.com/category/operate' },
  { name: 'pmd', url: 'https://www.woshipm.com/category/pmd' },
  { name: 'evaluating', url: 'https://www.woshipm.com/category/evaluating' },
  { name: 'user-research', url: 'https://www.woshipm.com/category/user-research' },
  { name: 'data-analysis', url: 'https://www.woshipm.com/category/data-analysis' },
  { name: 'it', url: 'https://www.woshipm.com/category/it' },
  { name: 'pd', url: 'https://www.woshipm.com/category/pd' },
  { name: 'zhichang', url: 'https://www.woshipm.com/category/zhichang' },
  { name: 'chuangye', url: 'https://www.woshipm.com/category/chuangye' },
];

const MAX_PAGES_PER_CATEGORY = 50;
const MAX_CONCURRENT_WORKERS = 8;
const ARTICLE_LINK_REGEX = /\/(?:[a-z-]+)\/(\d+)\.html$/;
const MONGO_URI = 'mongodb://localhost:27017';
const MONGO_DB_NAME = 'woshipm';
const MONGO_COLLECTION_NAME = 'articles';

// Helper functions
const getElementText = async (p, s) => (await p.$(s))?.evaluate(el => el.textContent.trim()) || '';
const getElementAttr = async (p, s, a) => (await p.$(s))?.evaluate((el, attr) => el.getAttribute(attr), a) || '';
const getArticleIdFromLink = (link) => (link.match(ARTICLE_LINK_REGEX) || [])[1] || null;

const parseDate = (dateString) => {
  if (!dateString) return new Date();
  if (dateString.includes('天前')) {
    const days = parseInt(dateString);
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
  }
  if (dateString.includes('小时前')) {
    const hours = parseInt(dateString);
    const date = new Date();
    date.setHours(date.getHours() - hours);
    return date;
  }
  return new Date(dateString);
};

// Producer: Discovers article links
async function discoverArticleTasks(browser, existingArticleIds) {
  console.log('--- Discovering new articles ---');
  const tasks = [];
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const category of CATEGORIES_TO_SCRAPE) {
    console.log(`Checking category: ${category.name}`);
    for (let pageNum = 1; pageNum <= MAX_PAGES_PER_CATEGORY; pageNum++) {
      const pageUrl = pageNum === 1 ? category.url : `${category.url}/page/${pageNum}`;
      try {
        await page.goto(pageUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
        
        const links = await page.$$eval(`article h2 a`, 
          (links, regexStr) => links.map(link => link.href).filter(href => new RegExp(regexStr).test(href)),
          ARTICLE_LINK_REGEX.source
        );

        if (links.length === 0) break;

        let newLinks = 0;
        for (const link of links) {
          const articleId = getArticleIdFromLink(link);
          if (articleId && !existingArticleIds.has(parseInt(articleId))) {
            tasks.push({ link, categoryName: category.name, articleId: parseInt(articleId) });
            existingArticleIds.add(parseInt(articleId));
            newLinks++;
          }
        }
        console.log(`  Page ${pageNum}: Found ${links.length} links (${newLinks} new)`);
      } catch (error) {
        console.error(`Error processing ${pageUrl}:`, error.message);
        break;
      }
    }
  }
  await context.close();
  console.log(`Found ${tasks.length} new articles to scrape`);
  return tasks;
}

// Worker: Scrapes individual articles
async function scrapeArticleDetails(pageInstance, link, categoryName) {
  await pageInstance.goto(link, { waitUntil: 'networkidle' });
  const articleId = getArticleIdFromLink(link);
  if (!articleId) return null;

  const cleanedHtmlContent = await pageInstance.evaluate(() => {
    const contentWrapper = document.querySelector('div.article--wrapper');
    if (!contentWrapper) return '';
    const contentClone = contentWrapper.cloneNode(true);
    ['.author-card', '.article--postmeta', '.relate-post', '.copyright-statement', 'div[data-role="ad"]', '.rewards-wrapper', '.woshipm-statement'].forEach(selector => {
      contentClone.querySelector(selector)?.remove();
    });
    return contentClone.innerHTML.trim();
  });

  const publishedText = await getElementText(pageInstance, 'time');
  return {
    _id: parseInt(articleId),
    article_title: await getElementText(pageInstance, 'h2.article--title'),
    article_author: await getElementText(pageInstance, 'a.ui-captionStrong'),
    author_Link: await getElementAttr(pageInstance, '.authorCard--title a', 'href'),
    article_published: publishedText,
    published_date_obj: parseDate(publishedText),
    article_brief: await getElementText(pageInstance, 'blockquote p'),
    comments: parseInt((await getElementText(pageInstance, 'div.meta--sup__right')).match(/(\d+)\s*评论/)?.[1] || 0),
    views: parseInt((await getElementText(pageInstance, 'div.meta--sup__right')).match(/(\d+)\s*浏览/)?.[1] || 0),
    collects: parseInt((await getElementText(pageInstance, 'div.meta--sup__right')).match(/(\d+)\s*收藏/)?.[1] || 0),
    article_content: cleanedHtmlContent,
    article_tag: (await pageInstance.$$eval('div.taglist a', tags => tags.map(tag => tag.textContent.trim()))).join(', '),
    article_link: link,
    category: categoryName,
    scraped_at: new Date()
  };
}

// Consumer: Processes tasks in parallel
async function processTaskQueue(browser, tasks, collection) {
  if (tasks.length === 0) return;

  console.log(`\n--- Processing ${tasks.length} articles with ${MAX_CONCURRENT_WORKERS} workers ---`);
  const limit = pLimit(MAX_CONCURRENT_WORKERS);
  let completed = 0;

  const scrapingPromises = tasks.map(task => {
    return limit(async () => {
      const context = await browser.newContext();
      const page = await context.newPage();
      try {
        const articleData = await scrapeArticleDetails(page, task.link, task.categoryName);
        if (articleData) {
          await collection.updateOne({ _id: articleData._id }, { $set: articleData }, { upsert: true });
          completed++;
          console.log(`(${completed}/${tasks.length}) Saved: ${articleData.article_title}`);
        }
      } catch (error) {
        console.error(`Failed to scrape ${task.link}:`, error.message);
      } finally {
        await context.close();
      }
    });
  });

  await Promise.all(scrapingPromises);
  console.log('--- All articles processed ---');
}

// Main execution
(async () => {
  let browser, mongoClient;

  try {
    console.log('Initializing...');
    browser = await chromium.launch({ headless: true });
    
    mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();
    const db = mongoClient.db(MONGO_DB_NAME);
    const collection = db.collection(MONGO_COLLECTION_NAME);

    // Get existing article IDs
    const existingArticles = await collection.find({}, { projection: { _id: 1 } }).toArray();
    const existingArticleIds = new Set(existingArticles.map(doc => doc._id));
    console.log(`Found ${existingArticleIds.size} existing articles`);

    // Discover and process articles
    const tasks = await discoverArticleTasks(browser, existingArticleIds);
    await processTaskQueue(browser, tasks, collection);

    console.log("\nScraping complete. Data saved to MongoDB.");
    console.log("Run 'node generate-report.js' to generate Excel report.");

  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (browser) await browser.close();
    if (mongoClient) await mongoClient.close();
    console.log('Finished.');
  }
})();