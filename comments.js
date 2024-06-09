// Create a web server
// Create an API end point
// Create a route to handle the API end point
// Create a function to handle the route
// Get the comments from the database
// Send the comments as JSON

// Load the express module
const express = require('express');

// Load the mongoose module
const mongoose = require('mongoose');

// Load the body-parser module
const bodyParser = require('body-parser');

// Load the Comment model
const Comment = require('./models/comment');

// Create a new express application
const app = express();

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/comments');

// Use the body parser middleware
app.use(bodyParser.json());

// Create a route to handle a GET request
app.get('/comments', (req, res) => {
    // Get all the comments from the database
    Comment.find((err, comments) => {
        // Check for errors
        if (err) {
            res.status(500).send('An error occurred: ' + err);
            return;
        }

        // Send the comments as JSON
        res.json(comments);
    });
});

// Create a route to handle a POST request
app.post('/comments', (req, res) => {
    // Create a new comment
    const comment = new Comment({
        name: req.body.name,
        message: req.body.message
    });

    // Save the comment to the database
    comment.save((err) => {
        // Check for errors
        if (err) {
            res.status(500).send('An error occurred: ' + err);
            return;
        }

        // Send a success message
        res.send('Comment saved');
    });
});

// Start the web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});