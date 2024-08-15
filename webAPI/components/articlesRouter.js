const express = require('express');
const router = express.Router();
const articles = require('./articles.js'); 

// API endpoint to get articles
router.get('/api/articles', (req, res) => {
    let filteredArticles = articles;
    const { topic, sortBy } = req.query;

    if (topic) {
        filteredArticles = filteredArticles.filter(article => article.Topic.includes(topic));
    }

    if (sortBy === 'newest') {
        filteredArticles = filteredArticles.sort((a, b) => new Date(b.Published) - new Date(a.Published));
    } else if (sortBy === 'oldest') {
        filteredArticles = filteredArticles.sort((a, b) => new Date(a.Published) - new Date(b.Published));
    }

    res.json(filteredArticles);
});

module.exports = router;