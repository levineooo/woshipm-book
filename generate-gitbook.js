const { MongoClient } = require('mongodb');
const fs = require('fs-extra');
const TurndownService = require('turndown');
const path = require('path');

// --- Configuration ---
const MONGO_URI = 'mongodb://localhost:27017';
const MONGO_DB_NAME = 'woshipm';
const MONGO_COLLECTION_NAME = 'articles'; // The single, unified collection
const OUTPUT_DIR = './WOSHIPM-Library'; // New general name
const BOOK_TITLE = 'My WOSHIPM Library';

(async () => {
  let mongoClient;

  try {
    // --- Initialize Turndown with proper filters ---
    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
      blankReplacement: (content, node) => {
        return node.isBlock ? '\n\n' : '';
      },
      defaultReplacement: (content, node) => {
        return content;
      }
    });
    
    // Add rules for special elements
    turndownService.addRule('lazy-image', {
      filter: ['img'],
      replacement: (content, node) => {
        const alt = node.alt || '';
        const src = node.src || '';
        return src ? `![${alt}](${src})` : '';
      }
    });

    // --- Connect to MongoDB and Fetch Data ---
    mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();
    const db = mongoClient.db(MONGO_DB_NAME);
    const collection = db.collection(MONGO_COLLECTION_NAME);

    console.log('Fetching all articles from MongoDB...');
    // ⭐ Fetch all articles and SORT BY THE NEW DATE OBJECT, newest first
    const allArticles = await collection.find({}).sort({ published_date_obj: -1 }).toArray();
    
    if (allArticles.length === 0) {
      console.log('No articles found in the database. Exiting.');
      return;
    }
    console.log(`Found ${allArticles.length} total articles.`);
    
    // ⭐ Group articles by category
    const articlesByCategory = allArticles.reduce((acc, article) => {
      const category = article.category || 'uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(article);
      return acc;
    }, {});
    
    // --- Prepare Output Directory ---
    const articlesDir = path.join(OUTPUT_DIR, 'articles');
    await fs.ensureDir(articlesDir);
    console.log(`Output directory prepared at: ${OUTPUT_DIR}`);

    // --- Generate README.md ---
    const readmeContent = `# ${BOOK_TITLE}\n\nAn automatically generated collection of articles from woshipm.com, sorted by category.\n\nTotal articles: ${allArticles.length}`;
    await fs.writeFile(path.join(OUTPUT_DIR, 'README.md'), readmeContent);

    // --- ⭐ Generate Categorized SUMMARY.md and Article Files ---
    let summaryContent = `# Table of Contents\n\n* [Introduction](./README.md)\n\n`;

    console.log('Generating categorized book structure...');
    // Loop through each category to build the summary
    for (const categoryName in articlesByCategory) {
      // Add a main heading for the category
      summaryContent += `## ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}\n\n`;
      
      const articles = articlesByCategory[categoryName];
      for (const article of articles) {
        const cleanTitle = (article.article_title || 'Untitled').replace(/[/\\?%*:|"<>]/g, '-');
        // ⭐ New filename structure: category-id.md
        const fileName = `${article.category}-${article._id}.md`;
        const filePath = path.join(articlesDir, fileName);

        // Add article link under its category heading
        summaryContent += `* [${cleanTitle}](./articles/${fileName})\n`;

        // --- Generate Individual Article File ---
        let markdownContent = '';
        try {
          // Clean and normalize HTML content
          let cleanHtml = (article.article_content || '')
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
            .replace(/<[^>]+>/g, match => {
              // Ensure all tags have proper closing
              if (!match.endsWith('>')) return '';
              return match;
            })
            .trim();

          // Convert only if we have valid content
          if (cleanHtml && cleanHtml.length > 10) { // Minimum content length check
            markdownContent = turndownService.turndown(cleanHtml);
          } else {
            markdownContent = 'No content available';
          }
        } catch (err) {
          console.warn(`Failed to convert HTML for article ${article._id}:`, err.message);
          markdownContent = `## Content Conversion Notice\n` +
            `The original content could not be automatically converted to Markdown.\n\n` +
            `**Original URL:** [View on woshipm.com](${article.article_link})`;
        }
        
        const tags = (article.article_tag || '').split(',').map(tag => tag.trim()).filter(Boolean);
        const formattedTags = tags.length ? tags.map(tag => `\`${tag}\``).join(' ') : 'None';
        
        const fileHeader = `
# ${article.article_title || 'Untitled'}
{% hint style="info" %}
**Category:** ${article.category.charAt(0).toUpperCase() + article.category.slice(1)}
**Author:** [${article.article_author || 'N/A'}](${article.author_Link || '#'})
**Published:** ${article.article_published || 'N/A'}  
**Stats:** 👁️ ${article.views || 0} views | 💬 ${article.comments || 0} comments | ⭐ ${article.collects || 0} collects
**Tags:** ${tags || 'None'}
**Original:** [View on woshipm.com](${article.article_link})
{% endhint %}
> ${article.article_brief || 'No brief available.'}
        `.trim();
        
        const finalFileContent = `${fileHeader}\n\n---\n\n${markdownContent}`;
        await fs.writeFile(filePath, finalFileContent);
      }
      summaryContent += `\n`; // Add a space after each category section
    }

    // Write the final SUMMARY.md file
    await fs.writeFile(path.join(OUTPUT_DIR, 'SUMMARY.md'), summaryContent);
    console.log('\n✅ GitBook generation complete!');

  } catch (error) {
    console.error('An error occurred during GitBook generation:', error);
  } finally {
    if (mongoClient) await mongoClient.close();
  }
})();