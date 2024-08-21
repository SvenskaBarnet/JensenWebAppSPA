const express = require('express');
const router = express.Router();
const articles = require('./articles.js'); 

// API endpoint to get articles
router.get('/api/articles', (req, res) => {
    let filteredArticles = articles;
    const { topic, sortBy, page = 1, limit = 10 } = req.query;

    const currentPage = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    if (topic && topic !== '') {
        filteredArticles = filteredArticles.filter(article => article.Topic.includes(topic));
    }

    if (sortBy === 'newest') {
        filteredArticles = filteredArticles.sort((a, b) => new Date(b.Published) - new Date(a.Published));
    } else if (sortBy === 'oldest') {
        filteredArticles = filteredArticles.sort((a, b) => new Date(a.Published) - new Date(b.Published));
    }

    const totalArticles = filteredArticles.length;
    const totalPages = Math.ceil(totalArticles / pageSize);
    const offset = (currentPage - 1) * pageSize;

    const paginatedArticles = filteredArticles.slice(offset, offset + pageSize);

    res.json({
        page: currentPage,
        limit: pageSize,
        total: totalArticles,
        totalPages: totalPages,
        data: paginatedArticles
    });
});

module.exports = router;