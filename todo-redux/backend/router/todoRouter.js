const express = require("express");
const router = express.Router();
const Todos = require("../models/todoModel");

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    const todos = new Todos({ text });
    await todos.save();
    res.status(201).json(todos);
  } catch (error) {
    console.error("Error in add todo");
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Todos.find();
    res.status(200).json(response);
  } catch (error) {
    console.error("Error in get todos");
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    const response = await Todos.findById(id);

    if (text !== undefined) response.text = text;
    if (completed !== undefined) response.completed = completed;
    await response.save();
    res.status(201).json(response);
  } catch (error) {
    console.error("Error in edit todo");
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const response = await Todos.findByIdAndDelete(id);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error in deleting todo");
    res.status(500).jsan({ message: "Server Error" });
  }
});

module.exports = router;
