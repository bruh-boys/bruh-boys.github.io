const express = require("express");

const app = express();

app.set('port', process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/style1.css", (req, res) => {
  res.sendFile(__dirname + "/static/style.css");
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
