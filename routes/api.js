// followed the mini-project's solved (routes)folder
// initializing the dependencies
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');

// GET route for retrieving all the notes
notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific note
notes.post('/api/:id', (req, res) => {
    const apiId = req.params.api_id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.notes_id === apiId);
      return result.length > 0
        ? res.json(result)
        : res.json('No notes with that ID');
    });
});
  
// BONUS: delete note (+10points)
// DELETE Route for a specific note
notes.delete('/:id', (req, res) => {
    const apiId = req.params.api_id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all notes except the one with the ID provided in the URL
        const result = json.filter((note) => note.notes_id !== apiId);
  
        // Save that array to the filesystem
        writeToFile('./db/db.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${apiId} has been deleted 🗑️`);
      });
  });
  
  // POST Route for a new UX/UI notes
 api.post('/notes', (req, res) => {
    console.log(req.body);

    // creating new title and text 
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        notes_id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Notes added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

// use to export the router from a module in Node.js.
module.exports = api;