// FRONT-END part of the application

// followed the mini-project's solved (routes) folder
// initializing the dependencies
const router = require('express').Router();
const path = require("path");

// GET Routing
// GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for main page
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// // GET request default
// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
//   });

// use to export the router from a module in Node.js.
module.exports = router;