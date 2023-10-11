const express = require("express");
const usersRouter = require("./routes/user");
const defaultRouter = require("./routes/default");
// const cors = require('cors')

const app = express();
// app.use(express.cors());

// Mount the users router
app.use("/user", usersRouter);
app.use("/default", defaultRouter);

// Parse JSON bodies
// app.use(express.json());
// Parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/default");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
