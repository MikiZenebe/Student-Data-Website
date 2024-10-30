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
  const { page = 1, limit = 10, search, sort } = req.query;

  try {
    const query = search ? { name: new RegExp(search, "i") } : {};
    const students = await Student.find(query)
      .sort(sort)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Student.countDocuments(query);

    res.json({
      students,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log("Error in createStudent controller: ", error);
  }
};
