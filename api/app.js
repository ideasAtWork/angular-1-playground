const express = require("express");
const cors = require('cors');
const people = require('./people');

const app = express();
app.use(cors());

app.get("/", function(req, res) {
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  res.json(randomPerson);
});
app.listen(3000);
console.log("Listening on port 3000. 🚀")
