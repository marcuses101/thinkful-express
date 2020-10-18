const express = require("express");
const morgan = require("morgan");
const app = express();
const { cipher } = require("./cipher.js");
const { lotto } = require("./lotto.js");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello Express");
});
app.get("/echo", (req, res) => {
  const responseText = `here are some details of your request:
  Base URL: ${req.baseUrl}
  Host: ${req.hostname}
  Path: ${req.path}`;
  res.send(responseText);
});

app.get("/queryViewer", (req, res) => {
  console.log(req.query);
  res.end();
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const responseString = `The sum of a and b is ${parseInt(a) + parseInt(b)}`;
  res.send(responseString);
});

app.get("/cipher", (req, res) => {
  console.log(req.query);
  const { text, shift } = req.query;
  const encryptedText = cipher(text, parseInt(shift));
  res.send(encryptedText);
});

app.get("/lotto", (req, res) => {
  const { arr } = req.query;
  console.log(arr)
  const numberArray = arr.map((entry) => parseInt(entry));
  res.send(lotto(numberArray));
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
