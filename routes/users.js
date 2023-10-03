const express = require('express');
const router = express.Router(); 
// const cors = require('cors')
// app.use(express.cors());

router.get('/', (req, res) => {
    let userData = {
        name: 'John', 
        timestamp: new Date().toUTCString(), 
        message: 'Hello word!'
    }
  res.send(userData);
});

router.post('/users', (req, res) => {
  // Create a new user
});

router.put('/users/:id', (req, res) => {
  // Update a user
});

router.delete('/users/:id', (req, res) => {
  // Delete a user
});

module.exports = router;
