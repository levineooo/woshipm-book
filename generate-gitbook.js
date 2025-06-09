const { MongoClient } = require('mongodb');
const fs = require('fs-extra');
const TurndownService = require('turndown');
const path = require('path');

// Configuration
const MONGO_URI = 'mongodb://localhost:27017';
const MONGO_DB_NAME = 'woshipm';
const MONGO_COLLECTION_NAME = 'marketing';
const OUTPUT_DIR = './woshipm-gitbook';

(async () => {
  let mongoClient;

  try {
    // Initialize and configure Turndown service
    console.log('Initializing services...');
    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
      emDelimiter: '_',
      bulletListMarker: '-',
      strongDelimiter: '**'
    });

    // Add custom rules for better Markdown conversion
    turndownService.addRule('lazy-image', {
      filter: (node) => node.nodeName === 'IMG' && node.getAttribute('data-src'),
      replacement: (content, node) => {
        const src = node.getAttribute('data-src') || '';
        const alt = node.getAttribute('alt') || '';
        return `![${alt}](${src})`;
      }
    });

    turndownService.addRule('div-cleanup', {
      filter: ['div'],
      replacement: (content) => content
    });

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();
    const db = mongoClient.db(MONGO_DB_NAME);
    const collection = db.collection(MONGO_COLLECTION_NAME);
    console.log(`Connected to MongoDB: ${MONGO_DB_NAME}/${MONGO_COLLECTION_NAME}`);

    // Fetch all articles sorted by ID
    const articles = await collection.find({}).sort({ _id: 1 }).toArray();
    if (articles.length === 0) {
      console.log('No articles found in the database. Exiting.');
      return;
    }
    console.log(`Found ${articles.length} articles to process.`);

    // Prepare output directory
    const articlesDir = path.join(OUTPUT_DIR, 'articles');
    await fs.ensureDir(articlesDir);
    console.log(`Output directory prepared at: ${OUTPUT_DIR}`);

    // Generate README.md
    const readmeContent = `# WOSHIPM Marketing Articles\n\nThis book contains marketing articles scraped from woshipm.com.\n\nTotal articles: ${articles.length}`;
    await fs.writeFile(path.join(OUTPUT_DIR, 'README.md'), readmeContent);

    // Generate SUMMARY.md and article files
    let summaryContent = '# Table of Contents\n\n* [Introduction](./README.md)\n\n';

    console.log('Generating article files and summary...');
    for (const article of articles) {
      const cleanTitle = (article.article_title || 'Untitled').replace(/[/\\?%*:|"<>]/g, '-');
      const fileName = `${article._id}.md`;
      const filePath = path.join(articlesDir, fileName);

      // Add to summary
      summaryContent += `* [${cleanTitle}](./articles/${fileName})\n`;

      // Convert HTML to Markdown
      const markdownContent = turndownService.turndown(article.article_content || '');

      // Format tags
      const tags = (article.article_tag || '')
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag)
        .map(tag => `\`${tag}\``)
        .join(' ');

      // Create article file with enhanced metadata header
      const fileContent = `# ${article.article_title || 'Untitled'}

{% hint style="info" %}
**Author:** [${article.article_author || 'Unknown'}](${article.author_Link || '#'})  
**Published:** ${article.article_published || 'Unknown date'}  
**Stats:** 👁️ ${article.views || 0} views | 💬 ${article.comments || 0} comments | ⭐ ${article.collects || 0} collects  
**Tags:** ${tags || 'None'}  
**Original:** [View on woshipm.com](${article.article_link})
{% endhint %}

> ${article.article_brief || 'No summary available.'}

---

${markdownContent}
      `.trim();

      await fs.writeFile(filePath, fileContent);
    }

    // Write SUMMARY.md
    await fs.writeFile(path.join(OUTPUT_DIR, 'SUMMARY.md'), summaryContent);

    console.log('\n✅ GitBook generation complete!');
    console.log(`Files are located in the '${OUTPUT_DIR}' directory.`);
    console.log('Next steps:');
    console.log('1. cd woshipm-gitbook');
    console.log('2. git init && git add . && git commit -m "Initial commit"');
    console.log('3. Connect to GitBook');

  } catch (error) {
    console.error('An error occurred during GitBook generation:', error);
  } finally {
    if (mongoClient) {
      await mongoClient.close();
      console.log('MongoDB connection closed.');
    }
  }
})();