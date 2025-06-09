const { chromium } = require('playwright');
const ExcelJS = require('exceljs');
const fs = require('fs');
const { MongoClient } = require('mongodb'); // Import MongoClient

(async () => {
  // --- Constants ---
  const BASE_URL = 'https://www.woshipm.com/category/marketing';
  const MAX_PAGES_TO_SCRAPE = 10; // For testing, set to a higher number for full scrape
  const ARTICLE_LINK_REGEX = /\/marketing\/(\d+)\.html$/; // Regex to extract unique ID

  // --- Excel Constants ---
  const EXCEL_FILE_PATH = 'woshipm_articles.xlsx';
  const EXCEL_WORKSHEET_NAME = 'Articles';

  // --- MongoDB Constants ---
  const MONGO_URI = 'mongodb://localhost:27017';
  const MONGO_DB_NAME = 'woshipm';
  const MONGO_COLLECTION_NAME = 'marketing';

  // --- Playwright Setup ---
  let browser;
  let context;
  let page;

  // --- MongoDB Setup ---
  let mongoClient;
  let db;
  let collection;

  // --- Excel Setup ---
  const workbook = new ExcelJS.Workbook();
  let worksheet;
  let headersSetInExcel = false;
  const existingArticleLinksInExcel = new Set(); // To store links from existing Excel file for new article detection

  try {
    // --- Initialize Playwright ---
    console.log('Initializing Playwright browser...');
    browser = await chromium.launch({ headless: true }); // Set to false for debugging: { headless: false }
    context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });
    page = await context.newPage();

    // --- Initialize MongoDB ---
    console.log('Connecting to MongoDB...');
    mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();
    db = mongoClient.db(MONGO_DB_NAME);
    collection = db.collection(MONGO_COLLECTION_NAME);
    console.log(`Connected to MongoDB: ${MONGO_DB_NAME}/${MONGO_COLLECTION_NAME}`);

    // --- Initialize Excel Workbook ---
    console.log('Initializing Excel workbook...');
    if (fs.existsSync(EXCEL_FILE_PATH)) {
      await workbook.xlsx.readFile(EXCEL_FILE_PATH);
      worksheet = workbook.getWorksheet(EXCEL_WORKSHEET_NAME) || workbook.addWorksheet(EXCEL_WORKSHEET_NAME);

      // Check if headers are already set (if rowCount > 0, implying data exists)
      headersSetInExcel = worksheet.rowCount > 0;

      // Load existing article links into the Set for Excel deduplication
      if (headersSetInExcel) {
        worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
          if (rowNumber === 1) return; // Skip header row
          // Assuming 'Article Link' is the column for the link in Excel
          const articleLink = row.getCell('Article Link').value;
          if (articleLink) {
            existingArticleLinksInExcel.add(articleLink);
          }
        });
        console.log(`Loaded ${existingArticleLinksInExcel.size} existing articles from Excel.`);
      }
    } else {
      worksheet = workbook.addWorksheet(EXCEL_WORKSHEET_NAME);
    }

    // Configure Excel worksheet headers if not already set
    if (!headersSetInExcel) {
      worksheet.columns = [
        { header: 'ID', key: 'id', width: 15 },
        { header: 'Title', key: 'article_title', width: 50 },
        { header: 'Author', key: 'article_author', width: 20 },
        { header: 'Author Link', key: 'author_Link', width: 30 },
        { header: 'Published Date', key: 'article_published', width: 15 },
        { header: 'Brief', key: 'article_brief', width: 60 },
        { header: 'Image URL', key: 'article_img', width: 40 },
        { header: 'Comments', key: 'comments', width: 10 },
        { header: 'Views', key: 'views', width: 10 },
        { header: 'Collects', key: 'collects', width: 10 },
        { header: 'Tags', key: 'article_tag', width: 30 },
        { header: 'Article Link', key: 'article_link', width: 50 }
        // Note: Full article content will NOT be added to Excel due to size limitations,
        // but it WILL be stored in MongoDB.
      ];
    }

    // --- Helper Functions for Scraping ---
    async function getElementText(pageInstance, selector) {
      const element = await pageInstance.$(selector);
      return element ? await element.evaluate(el => el.textContent.trim()) : '';
    }

    async function getElementAttr(pageInstance, selector, attr) {
      const element = await pageInstance.$(selector);
      return element ? await element.evaluate((el, a) => el.getAttribute(a), attr) : '';
    }

    async function getElementSrc(pageInstance, selector) {
      return getElementAttr(pageInstance, selector, 'src');
    }

    async function getElementInnerHtml(pageInstance, selector) {
      const element = await pageInstance.$(selector);
      return element ? await element.evaluate(el => el.innerHTML.trim()) : '';
    }

    async function getElementTextContent(pageInstance, selector) {
      const element = await pageInstance.$(selector);
      return element ? await element.evaluate(el => el.textContent.trim()) : '';
    }

    async function getTags(pageInstance) {
      const tags = await pageInstance.$$('div.taglist a');
      if (tags.length === 0) return '';
      return pageInstance.$$eval('div.taglist a', tags =>
        tags.map(tag => tag.textContent.trim()).join(', ')
      );
    }

    function getArticleIdFromLink(link) {
      const match = link.match(ARTICLE_LINK_REGEX);
      return match ? parseInt(match[1], 10) : null;
    }

    // --- Function to Scrape Detailed Article Data ---
    async function scrapeArticleDetails(pageInstance, link) {
      await pageInstance.goto(link, { waitUntil: 'networkidle' });

      const articleId = getArticleIdFromLink(link);
      if (!articleId) {
        console.warn(`Could not extract ID from link: ${link}`);
        return null;
      }

      console.log(`Scraping details for article ID: ${articleId} - ${link}`);

      const data = {
        _id: articleId, // MongoDB's unique identifier
        id: articleId, // Also include in data for Excel/clarity
        article_title: await getElementText(pageInstance, 'h2.article--title'),
        article_author: await getElementText(pageInstance, 'a.ui-captionStrong'),
        author_Link: await getElementAttr(pageInstance, '.authorCard--title a', 'href'),
        article_published: await getElementText(pageInstance, 'time'),
        article_brief: await getElementText(pageInstance, 'blockquote p'),
        article_img: await getElementSrc(pageInstance, 'a.u-flex img.avatar'),
        article_info: await getElementText(pageInstance, 'div.meta--sup__right'),
        comments: parseInt((await getElementText(pageInstance, 'div.meta--sup__right')).match(/(\d+)\s*评论/)?.[1] || 0),
        views: parseInt((await getElementText(pageInstance, 'div.meta--sup__right')).match(/(\d+)\s*浏览/)?.[1] || 0),
        collects: parseInt((await getElementText(pageInstance, 'div.meta--sup__right')).match(/(\d+)\s*收藏/)?.[1] || 0),
        article_content: await getElementInnerHtml(pageInstance, 'div.article--wrapper'), // Full HTML content
        article_tag: await getTags(pageInstance),
        article_link: link,
        scraped_at: new Date() // Timestamp for when the data was scraped
      };
      return data;
    }

    // --- Main Scraping Loop ---
    console.log('Starting scraping process...');
    let currentPage = 1;
    let hasNextPage = true;
    let newArticlesAddedToMongo = 0;
    let newArticlesAddedToExcel = 0;

    while (hasNextPage && currentPage <= MAX_PAGES_TO_SCRAPE) {
      console.log(`\nProcessing page ${currentPage} of max ${MAX_PAGES_TO_SCRAPE}...`);
      const pageUrl = currentPage === 1 ? BASE_URL : `${BASE_URL}/page/${currentPage}`;

      try {
        await page.goto(pageUrl, { waitUntil: 'networkidle' });

        // Get all article links on the page - matches both featured and regular articles
        const articleLinksOnPage = await page.$$eval(`
          div.main-content article.excerpt h2 a,
          article.postlist-item h2.post-title a
        `, links =>
          links.map(link => link.href).filter(href => /\/marketing\/\d+\.html$/.test(href))
        );

        // Remove duplicates and process each unique link
        const uniqueLinksOnPage = [...new Set(articleLinksOnPage)];
        console.log(`Found ${uniqueLinksOnPage.length} unique article links on page ${currentPage}`);

        for (const link of uniqueLinksOnPage) {
          const articleId = getArticleIdFromLink(link);
          if (!articleId) {
            console.warn(`Skipping article due to invalid link format: ${link}`);
            continue;
          }

          // Check if article already exists in MongoDB by ID
          const existingInMongo = await collection.findOne({ _id: articleId });

          if (existingInMongo) {
            // console.log(`Article ID ${articleId} already exists in MongoDB. Skipping detailed scrape.`);
            // If it's already in Mongo, and not in Excel, we might want to add it to Excel if it's "new" for Excel.
            if (!existingArticleLinksInExcel.has(link)) {
                // We don't have full details here, so we'd either need to re-scrape or assume Mongo has the definitive data
                // For simplicity, we'll only add to Excel if scraped in this run.
                // If you want to sync existing Mongo articles to Excel, that's a separate process.
            }
            continue; // Skip detailed scrape if already in Mongo (and implicitly handled by upsert)
          }

          // If not in MongoDB, or if you want to update existing records, proceed to scrape
          const articleData = await scrapeArticleDetails(page, link);

          if (articleData) {
            // Store in MongoDB (upsert: insert if not exists, update if exists)
            const result = await collection.updateOne(
              { _id: articleData._id },
              { $set: articleData },
              { upsert: true }
            );

            if (result.upsertedCount > 0) {
              newArticlesAddedToMongo++;
              console.log(`Added new article to MongoDB: ID ${articleData._id}`);
            } else if (result.modifiedCount > 0) {
              console.log(`Updated existing article in MongoDB: ID ${articleData._id}`);
            }

            // Store in Excel (only if new to Excel)
            if (!existingArticleLinksInExcel.has(articleData.article_link)) {
              // Create a subset of data for Excel (excluding content)
              const excelRowData = {
                id: articleData.id,
                article_title: articleData.article_title,
                article_author: articleData.article_author,
                author_Link: articleData.author_Link,
                article_published: articleData.article_published,
                article_brief: articleData.article_brief,
                article_img: articleData.article_img,
                comments: articleData.comments,
                views: articleData.views,
                collects: articleData.collects,
                article_tag: articleData.article_tag,
                article_link: articleData.article_link
              };
              worksheet.addRow(excelRowData);
              existingArticleLinksInExcel.add(articleData.article_link);
              newArticlesAddedToExcel++;
              console.log(`Added new article to Excel: ${articleData.article_title}`);
            }
          }
        }

        // Enhanced pagination from reference file
        await page.waitForSelector('a.next.page-numbers', { timeout: 5000, state: 'attached' })
          .then(() => hasNextPage = true)
          .catch(() => hasNextPage = false);
        
        if (!hasNextPage && currentPage < MAX_PAGES_TO_SCRAPE) {
          console.log(`Forcing page ${currentPage + 1} since max pages not reached`);
          hasNextPage = true;
        }

        if (hasNextPage) {
          currentPage++;
          console.log(`Moving to page ${currentPage}...`);
          await page.goto(`${BASE_URL}/page/${currentPage}`, { waitUntil: 'networkidle' });
          await page.waitForTimeout(2000);
        } else {
          console.log(`No next page link found on page ${currentPage}. Finishing scrape.`);
        }

        // If we haven't reached MAX_PAGES_TO_SCRAPE but next page link is gone,
        // we might still want to try going to the next page number directly,
        // but typically the 'next' button is the most reliable indicator.
        // Forcing `hasNextPage = true` here if `currentPage < MAX_PAGES_TO_SCRAPE`
        // could lead to trying to scrape non-existent pages and just timing out.
        // The current logic correctly stops if the "next" button is truly absent.

      } catch (error) {
        console.error(`Error processing page ${currentPage}:`, error);
        hasNextPage = false; // Stop on error
      }
    }

    // --- Final Save and Notifications ---
    console.log('\n--- Scraping Summary ---');
    console.log('Saving Excel file...');
    await workbook.xlsx.writeFile(EXCEL_FILE_PATH);
    console.log(`Data saved to ${EXCEL_FILE_PATH}`);

    console.log(`\n✨ Notification:`);
    if (newArticlesAddedToMongo > 0) {
      console.log(`Found and added ${newArticlesAddedToMongo} new articles to MongoDB!`);
    } else {
      console.log('No new articles added to MongoDB.');
    }

    if (newArticlesAddedToExcel > 0) {
      console.log(`Added ${newArticlesAddedToExcel} new articles to Excel!`);
      // You can extend this notification to save details of new articles to a text file
      // Example (you'd need to collect these in a separate array during the loop):
      // fs.writeFileSync('new_woshipm_articles_alert.txt', `New articles added to Excel on ${new Date().toLocaleString()}:\n\n${newArticlesListForExcel}\n`);
      // console.log('Details of new articles added to Excel saved to new_woshipm_articles_alert.txt');
    } else {
      console.log('No new articles added to Excel.');
    }

  } catch (globalError) {
    console.error('A critical error occurred:', globalError);
  } finally {
    // --- Clean Up ---
    if (browser) {
      console.log('Closing browser...');
      await browser.close();
    }
    if (mongoClient) {
      console.log('Closing MongoDB connection...');
      await mongoClient.close();
    }
    console.log('Script finished.');
  }
})();