import Student from "../models/studentModel.js";

export const registerStudent = async (req, res) => {
  const { fullName, age, course, contactInfo } = req.body;

  try {
    const newStudent = new Student({
      fullName,
      age,
      course,
      contactInfo,
    });

    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log("Error in createStudent controller: ", error);
  }
};

export const getAllStudent = async (req, res) => {
  const { page = 1, course } = req.query;
  const limit = 5;
  const skip = (page - 1) * limit;

  try {
    const filter = {};

    if (course) filter.course = course;

    const students = await Student.find(filter).skip(skip).limit(limit);

    const totalStudents = await Student.countDocuments(filter);

    res.json({
      students,
      totalStudents,
      totalPages: Math.ceil(totalStudents / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log("Error in createStudent controller: ", error);
  }
};

export const filterByCourse = async (req, res) => {
  try {
    const courses = await Student.distinct("course");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
};

export const getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(400).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
