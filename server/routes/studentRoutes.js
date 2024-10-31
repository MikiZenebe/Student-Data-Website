import express from "express";
import {
  registerStudent,
  getAllStudent,
  filterByCourse,
  getSingleStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/newStudent", registerStudent);
router.get("/students", getAllStudent);
router.get("/students/course", filterByCourse);
router.get("/student/:id", getSingleStudent);

export default router;
