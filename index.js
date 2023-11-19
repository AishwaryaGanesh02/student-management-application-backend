const express = require("express");
const app = express();

// DATABASE
const database = require("./database");

app.listen(3000, () => {
  console.log("Server up and running");
});
