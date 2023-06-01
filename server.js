// Followed the mini project's solved folder
const path = require('path');
const api = require('./routes/html.js');
const fs = require('fs');

// initializing for Heroku deployment
const PORT = process.env.port || 3001;

// importing express modules to use its functionalities
const express = require('express');
// creating an instance of the express web app
const app = express();


// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

app.use(express.static('public'));

// FRONT-END part of the application
// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET request default
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

// create new note ---PUT CODE HERE
app.post('/api/notes', (req, res) => {
  const createNote = 

  fs.writeFileSync
});

// delete note -----PUT CODE HERE
app.delete('/api/notes/:id', (req, res) => {
  //add here


});
// Setting the listener to be activated in the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
