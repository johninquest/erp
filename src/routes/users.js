const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");

router.get("/", (req, res) => {
  let userData = {
    name: "John",
    timestamp: new Date().toUTCString(),
    timestampDayjs: dayjs(),
    message: "Hello word!",
  };
  res.send(userData);
});

router.get("/:id", (req, res) => {
  let reqParam = req.params.id;
  console.log("Request id -> ", reqParam);
  res.send(`Called user endpoint with id => ${reqParam}`);
});

router.put("/user", (req, res) => {
  // Update a user
});

router.delete("/user", (req, res) => {
  // Delete a user
});

module.exports = router;
