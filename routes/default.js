const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    let someHTML = `<p style="margin: 3rem; text-align: center; font-weight: bold; color: indianred">Hello API</p>`
  res.send(someHTML);
});

module.exports = router;
