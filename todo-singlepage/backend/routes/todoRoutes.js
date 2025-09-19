const express = require("express");
const Todo = require("../models/Todo.js");

const router = express.Router();

// create new todo
router.post("/todos", async (req, res) => {
  const { text } = req.body;
  // console.log(req.body);

  const todo = new Todo({ text });
  await todo.save();
  res.json(todo);
});

// get all todos
router.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// editing  todo
router.put("/todos/:id", async (req, res) => {
  const { text, completed } = req.body;

  const todo = await Todo.findById(req.params.id);
  if (text !== undefined) todo.text = text;
  if (completed !== undefined) todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

// Delete todo

router.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
