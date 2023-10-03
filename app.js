const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const resp = {
    author: 'John',
    timestamp: new Date().toLocaleDateString(), 
    message: 'Hello world!' 

  }
  res.send(resp);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
