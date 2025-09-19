const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3001;
const todoRouter = require("./router/todoRouter.js");
const db = require("./config/db.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());
db();

app.use("/api", todoRouter);

app.use("/", (req, res) => {
  res.send("Backend connected");
});

app.listen(PORT, () => console.log(`Backend onnected Port is ${PORT}`));
