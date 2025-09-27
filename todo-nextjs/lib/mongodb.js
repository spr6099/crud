import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo2"); // no options needed
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection ERROR:", error);
  }
};

export default connectDB;
