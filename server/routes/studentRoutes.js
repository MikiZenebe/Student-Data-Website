import express from "express";
import {
  registerStudent,
  getAllStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/newStudent", registerStudent);
router.get("/", getAllStudent);

export default router;
