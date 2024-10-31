import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); // to parse req.body
app.use(express.urlencoded({ extended: true })); //to parse form data(urlencoded)
dotenv.config();

//routes
app.use("/api/students", studentRoutes);

app.listen(5000, () => {
  console.log("Server is running");
  connectDB();
});
