const express = require("express");
const router = express.Router();
const Todo = require("../models/TodoModal.js");

router.post("/", async (req, res) => {
  try {

    const { text } = req.body;
    const todo = new Todo({ text });
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error("Error creating todo", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.json(todo);
  } catch (error) {
    console.error("Error get alll todo", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    const todo = await Todo.findById(id);
    if (text !== undefined) todo.text = text;
    if (completed !== undefined) todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error("Error updating todo", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "todo deleted succesfully" });
  } catch (error) {
    console.error("Error deleting todo", error);

    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
