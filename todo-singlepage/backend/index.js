const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todoRoutes.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/todo2");

app.use("/api", todoRouter);

app.use("/", (req, res) => {
  res.send("backend connected");
});

app.listen(5001, () => console.log("port running on 5001"));
