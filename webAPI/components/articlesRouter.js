const express = require('express'); // Importing the express module
const mysql = require('mysql2'); // Importing the mysql2 module
const router = express.Router(); // Creating a new router object
const dbConfig = require('./dbConfig'); // Importing the database configuration

// Function to remove HTML tags
function removeHtmlTags(str) {
    return str.replace(/<[^>]*>/g, '');
}

// Create a database connection
const db = mysql.createConnection(dbConfig);

// API endpoint to get articles
router.get('/api/articles', (req, res) => {
    const { topic, sortBy = 'newest', page = 1, limit = 10, searchTerm = ''} = req.query; // Destructuring query parameters with default values

    const currentPage = parseInt(page, 10) || 1; // Parsing page number to integer with default value
    const pageSize = parseInt(limit, 10) || 10; // Parsing limit to integer with default value
    const offset = (currentPage - 1) * pageSize; // Calculating offset for pagination

    // Ensure pageSize is not NULL
    if (isNaN(pageSize) || pageSize <= 0) {
        return res.status(400).send('Invalid limit value');
    }

    let sortOrder = sortBy === 'newest' ? 'DESC' : 'ASC'; // Determine sort order
    let query = `SELECT id, title, summary, link, published, topic FROM news`; // Include id in the select query

    // Add filtering by topic if provided
    let queryParams = [];
    let conditions = [];
    if (topic && topic !== '') {
        conditions.push(`topic LIKE ?`);
        queryParams.push(`%${topic}%`);
    }

    // Add filtering by searchTerm if provided
    if(searchTerm && searchTerm !== '') {
        conditions.push(`title LIKE ? OR summary LIKE ?`);
        queryParams.push(`%${searchTerm}%`, `%${searchTerm}%`);
    }

    // Add WHERE * AND * clause if conditions are present
    if (conditions.length > 0) {
        query += ` WHERE ${conditions.join(' AND ')}`;
    }

    // Add sorting and pagination
    query += ` ORDER BY published ${sortOrder} LIMIT ? OFFSET ?`;
    queryParams.push(pageSize, offset);

    // Execute the query
    db.query(query, queryParams, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).send('Error fetching articles');
        }

        // Clean the summaries
        results.forEach(article => {
            article.summary = removeHtmlTags(article.summary);
        });

        // Get total count of articles for pagination
        let countQuery = `SELECT COUNT(*) AS total FROM news`;
        let countParams = [];
        if(conditions.length > 0) {
            countQuery += ` WHERE ${conditions.join(' AND ')}`;
            countParams = queryParams.slice(0, queryParams.length - 2); // Remove limit and offset from countParams
        }

        db.query(countQuery, countParams, (countError, countResults) => {
            if (countError) {
                console.error('Error fetching article count:', countError);
                return res.status(500).send('Error fetching article count');
            }

            const totalArticles = countResults[0].total;
            const totalPages = Math.ceil(totalArticles / pageSize);

            res.json({
                page: currentPage, // Current page number
                limit: pageSize, // Number of articles per page
                total: totalArticles, // Total number of filtered articles
                totalPages: totalPages, // Total number of pages
                data: results // Articles for the current page
            });
        });
    });
});

module.exports = router; // Exporting the router object