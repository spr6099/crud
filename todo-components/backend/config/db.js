const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo2");
    console.log("Mongoose connected succesfully");
  } catch (error) {
    console.error("MongDB connectio fail", error);
  }
};

module.exports = db;
