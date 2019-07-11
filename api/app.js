const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/getData", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/postData", bodyParser.json(), (req, res) => {
  res.json(req.body);
});
app.listen(3000, () => console.log("App listening on port 3000!"));
