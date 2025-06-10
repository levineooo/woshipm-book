const { MongoClient } = require('mongodb');
const fs = require('fs-extra');
const TurndownService = require('turndown');
const path = require('path');

// --- Configuration ---
const MONGO_URI = 'mongodb://localhost:27017';
const MONGO_DB_NAME = 'woshipm';
const MONGO_COLLECTION_NAME = 'articles';
const OUTPUT_DIR = './WOSHIPM-Library';
const BOOK_TITLE = 'My WOSHIPM Library';

(async () => {
  let mongoClient;

  try {
    // --- Initialize Turndown (no changes here) ---
    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
    });
    turndownService.addRule('lazy-image', {
      filter: ['img'],
      replacement: (content, node) => {
        const alt = node.alt || '';
        const src = node.src || node.getAttribute('data-src') || '';
        return src ? `![${alt}](${src})` : '';
      }
    });

    // --- Connect to MongoDB and Fetch Data ---
    mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();
    const db = mongoClient.db(MONGO_DB_NAME);
    const collection = db.collection(MONGO_COLLECTION_NAME);

    console.log('Fetching all articles from MongoDB...');
    const allArticles = await collection.find({}).sort({ published_date_obj: -1 }).toArray();
    
    if (allArticles.length === 0) {
      console.log('No articles found in the database. Exiting.');
      return;
    }
    console.log(`Found ${allArticles.length} total articles.`);
    
    // ⭐ Group articles by Category -> Year -> Month
    const articlesByHierarchy = allArticles.reduce((acc, article) => {
      const category = article.category || 'uncategorized';
      const date = new Date(article.published_date_obj);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // e.g., '05' for May

      if (!acc[category]) acc[category] = {};
      if (!acc[category][year]) acc[category][year] = {};
      if (!acc[category][year][month]) acc[category][year][month] = [];
      
      acc[category][year][month].push(article);
      return acc;
    }, {});
    
    // --- Prepare Output Directory ---
    await fs.emptyDir(OUTPUT_DIR); // Clean the directory before generating
    console.log(`Output directory prepared at: ${OUTPUT_DIR}`);

    // --- Generate README.md ---
    const readmeContent = `# ${BOOK_TITLE}\n\nAn automatically generated collection of articles from woshipm.com, sorted by category and date.\n\nTotal articles: ${allArticles.length}`;
    await fs.writeFile(path.join(OUTPUT_DIR, 'README.md'), readmeContent);

    // ⭐ Generate Hierarchical SUMMARY.md and Article Files ---
    let summaryContent = `# Table of Contents\n\n* [Introduction](./README.md)\n\n`;

    console.log('Generating hierarchical book structure...');
    
    // Loop through Categories
    for (const categoryName in articlesByHierarchy) {
      const categoryTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
      summaryContent += `## ${categoryTitle}\n\n`;

      // Loop through Years
      for (const year in articlesByHierarchy[categoryName]) {
        summaryContent += `  * [${year}](./articles/${categoryName}/${year}/README.md)\n`;
        const yearPath = path.join(OUTPUT_DIR, 'articles', categoryName, year);
        await fs.ensureDir(yearPath);
        // Create a README for the year
        await fs.writeFile(
          path.join(yearPath, 'README.md'), 
          `# ${categoryTitle} - ${year}\n\nArticles published in ${year}.`
        );
        
        // Loop through Months
        for (const month in articlesByHierarchy[categoryName][year]) {
          const monthName = new Date(`${year}-${month}-01`).toLocaleString('default', { month: 'long' });
          summaryContent += `    * [${monthName}](./articles/${categoryName}/${year}/${month}/README.md)\n`;
          const monthPath = path.join(yearPath, month);
          await fs.ensureDir(monthPath);
          // Create a README for the month
          await fs.writeFile(
            path.join(monthPath, 'README.md'), 
            `# ${categoryTitle} - ${monthName} ${year}\n\nArticles published in ${monthName} ${year}.`
          );

          const articles = articlesByHierarchy[categoryName][year][month];
          // Loop through articles in that month
          for (const article of articles) {
            const cleanTitle = (article.article_title || 'Untitled').replace(/[/\\?%*:|"<>]/g, '-');
            // ⭐ New filename is just the ID, as the path provides all context
            const fileName = `${article._id}.md`;
            const filePath = path.join(monthPath, fileName);

            // Add article link with proper indentation
            summaryContent += `        * [${cleanTitle}](./articles/${categoryName}/${year}/${month}/${fileName})\n`;

            // --- Generate Individual Article File (logic is the same as before) ---
            const markdownContent = turndownService.turndown(article.article_content || 'No content available.');
            const tags = (article.article_tag || '').split(',').map(tag => tag.trim()).filter(Boolean);
            const formattedTags = tags.length ? tags.map(tag => `\`${tag}\``).join(' ') : 'None';
            const fileHeader = `
# ${article.article_title || 'Untitled'}
{% hint style="info" %}
**Category:** ${categoryTitle}
**Author:** [${article.article_author || 'N/A'}](${article.author_Link || '#'})
**Published:** ${article.article_published || 'N/A'}  
**Stats:** 👁️ ${article.views || 0} views | 💬 ${article.comments || 0} comments | ⭐ ${article.collects || 0} collects
**Tags:** ${formattedTags}
**Original:** [View on woshipm.com](${article.article_link})
{% endhint %}
> ${article.article_brief || 'No brief available.'}
            `.trim();
            const finalFileContent = `${fileHeader}\n\n---\n\n${markdownContent}`;
            await fs.writeFile(filePath, finalFileContent);
          }
        }
      }
      summaryContent += `\n`; // Add a space after each category section
    }

    await fs.writeFile(path.join(OUTPUT_DIR, 'SUMMARY.md'), summaryContent);
    console.log('\n✅ GitBook generation complete!');

  } catch (error) {
    console.error('An error occurred during GitBook generation:', error);
  } finally {
    if (mongoClient) await mongoClient.close();
  }
})();