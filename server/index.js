import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

const app = express();
dotenv.config();

app.listen(5000, () => {
  console.log("Server is running");
  connectDB();
});
