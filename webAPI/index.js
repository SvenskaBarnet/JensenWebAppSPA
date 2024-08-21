const express = require('express'); // Importing the express module
const cors = require('cors'); // Importing the cors module for handling Cross-Origin Resource Sharing
const app = express(); // Creating an instance of an Express application
const port = 3000; // Defining the port number on which the server will run

app.use(cors()); // Enabling CORS for all routes

// API endpoint to get articles
const articlesRouter = require('./components/articlesRouter.js'); // Importing the articles router from a relative path
app.use('/', articlesRouter); // Using the articles router for the root path

app.listen(port, () => {
    console.log(`Backend API running at http://localhost:${port}`); // Logging a message when the server starts
});