const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3003;
const connectDB = require("./config/connectDB");
const todoRouter = require("./router/todoRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());
connectDB();

app.use("/api", todoRouter);

app.use("/", (req, res) => {
  res.send("Backend connected");
});

app.listen(PORT, () => console.log(`backend connected on ${PORT}`));
