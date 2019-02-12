const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log("We are live on " + port);
});
