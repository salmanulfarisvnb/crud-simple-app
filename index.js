require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 7000 || 8000;
const mongoDb_URL = process.env.mongoDb_URL;

mongoose
  .connect(mongoDb_URL)
  .then(() => console.log("Db is Connected"))
  .catch((Error) => console.log(Error));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello Next Js</h1>");
});

app.listen(port, () => console.log("Server Active"));
