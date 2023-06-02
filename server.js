// Followed the mini project's solved (server.js)folder
// initializing dependencies
const path = require('path');
const fs = require('fs');
// importing express modules to use its functionalities
const express = require('express');

// creating an express web app server
const app = express();

// initializing the PORT for Heroku deployment
const PORT = process.env.PORT || 3001;

// calling server to the route files
const api = require('./routes/api.js');
const html = require('./routes/html.js');

// const fs = require('fs');

// Middleware for parsing JSON and urlencoded form data
// Receiving data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// serves as static files from the 'public' directory 
// any files placed in the 'public' directory will be accessible by user visiting the server
app.use(express.static('public'));

// allows the user to define routes specific to API endpoints
app.use('/api', api);
// use to handle requests for HTML pages or define routes for the app's main page
app.use('/', html);
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// // GET Route for main page
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// Setting the listener to be activated in the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
