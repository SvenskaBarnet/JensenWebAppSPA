const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// API endpoint to get articles
const articlesRouter = require('./components/articlesRouter.js');
app.use('/', articlesRouter);

app.listen(port, () => {
    console.log(`Backend API running at http://localhost:${port}`);
});