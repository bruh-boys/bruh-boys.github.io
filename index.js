const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/style1.css", (req, res) => {
  res.sendFile(__dirname + "/static/style.css");
});

app.listen(3000);
console.log("Server on port 3000");
