const { mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo2");
    console.log("Mongodb connected succesfully");
  } catch (error) {
    console.error("Mongoose connected ERROR", error);
  }
};

module.exports = connectDB;
