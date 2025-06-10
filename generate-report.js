const ExcelJS = require('exceljs');
const { MongoClient } = require('mongodb');

const EXCEL_FILE_PATH = 'woshipm_articles_by_category.xlsx';
const MONGO_URI = 'mongodb://localhost:27017';
const MONGO_DB_NAME = 'woshipm';
const MONGO_COLLECTION_NAME = 'articles';

(async () => {
  let mongoClient;
  console.log('Generating Excel report...');

  try {
    mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();
    const db = mongoClient.db(MONGO_DB_NAME);
    const collection = db.collection(MONGO_COLLECTION_NAME);

    const workbook = new ExcelJS.Workbook();
    
    // Get all unique categories
    const categories = await collection.distinct('category');
    console.log(`Found ${categories.length} categories to process`);

    for (const category of categories) {
      console.log(`Creating sheet for ${category}`);
      const worksheet = workbook.addWorksheet(category);

      // Set up columns
      worksheet.columns = [
        { header: 'ID', key: '_id', width: 15 },
        { header: 'Title', key: 'article_title', width: 60 },
        { header: 'Author', key: 'article_author', width: 25 },
        { header: 'Published Date', key: 'article_published', width: 20 },
        { header: 'Views', key: 'views', width: 10 },
        { header: 'Comments', key: 'comments', width: 10 },
        { header: 'Tags', key: 'article_tag', width: 40 },
        { header: 'Article Link', key: 'article_link', width: 70 }
      ];

      // Get articles sorted by date (newest first)
      const articles = await collection.find({ category })
        .sort({ published_date_obj: -1 })
        .toArray();

      worksheet.addRows(articles);
      console.log(`  Added ${articles.length} articles`);
    }

    // Save the Excel file
    await workbook.xlsx.writeFile(EXCEL_FILE_PATH);
    console.log(`\nReport saved to ${EXCEL_FILE_PATH}`);

  } catch (error) {
    console.error('Error generating report:', error);
  } finally {
    if (mongoClient) await mongoClient.close();
    console.log('Report generation complete.');
  }
})();