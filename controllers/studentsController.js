const courseModel = require("../models/StudentModel");

const handleGreeting = (req, res) => {
  res.send("Hello, Lao-Top API");
};

const handleGetStudents = (req, res) => {
  const studentsData = studentModel.getAllStudents();
  res.json({ students: studentsData });
};

const studentController = {
  handleGreeting,
  handleGetStudents,
};

module.exports = studentController;