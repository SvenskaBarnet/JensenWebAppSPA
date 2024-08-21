const express = require('express'); // Importing the express module
const router = express.Router(); // Creating a new router object
const articles = require('./articles.js'); // Importing articles data from a relative path

// API endpoint to get articles
router.get('/api/articles', (req, res) => {
    let filteredArticles = articles; // Initializing filteredArticles with all articles
    const { topic, sortBy, page = 1, limit = 10 } = req.query; // Destructuring query parameters with default values

    const currentPage = parseInt(page, 10); // Parsing page number to integer
    const pageSize = parseInt(limit, 10); // Parsing limit to integer

    if (topic && topic !== '') {
        filteredArticles = filteredArticles.filter(article => article.Topic.includes(topic)); // Filtering articles by topic
    }

    if (sortBy === 'newest') {
        filteredArticles = filteredArticles.sort((a, b) => new Date(b.Published) - new Date(a.Published)); // Sorting articles by newest
    } else if (sortBy === 'oldest') {
        filteredArticles = filteredArticles.sort((a, b) => new Date(a.Published) - new Date(b.Published)); // Sorting articles by oldest
    }

    const totalArticles = filteredArticles.length; // Total number of filtered articles
    const totalPages = Math.ceil(totalArticles / pageSize); // Calculating total pages
    const offset = (currentPage - 1) * pageSize; // Calculating offset for pagination

    const paginatedArticles = filteredArticles.slice(offset, offset + pageSize); // Slicing articles for the current page

    res.json({
        page: currentPage, // Current page number
        limit: pageSize, // Number of articles per page
        total: totalArticles, // Total number of filtered articles
        totalPages: totalPages, // Total number of pages
        data: paginatedArticles // Articles for the current page
    });
});

module.exports = router; // Exporting the router object