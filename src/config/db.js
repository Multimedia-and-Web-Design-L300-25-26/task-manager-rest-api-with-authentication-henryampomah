import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed");
    console.error("Full error message:", error.message);     // ← add this
    console.error("Error details:", error);                  // ← add this (shows stack + more info)
    process.exit(1);
  }
};

export default connectDB;