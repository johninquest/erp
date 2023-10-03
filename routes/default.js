const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    let someHTML = `<p style="margin: 3rem; text-align: center; font-weight: bold; color: indianred">Hello API</p>`
  res.send(someHTML);
});

router.post('/users', (req, res) => {
  return res.send('Hello default user!');
});

router.put('/users/:id', (req, res) => {
  // Update a user
});

router.delete('/users/:id', (req, res) => {
  // Delete a user
});

module.exports = router;
