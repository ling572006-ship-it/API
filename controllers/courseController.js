const courseModel = require("../models/courseModel");

const handleGetStudents = (req, res) => {
    const courseData = courseModel.getAllStudents();
    res.json(courseData);
};

const courseController =  {
    handleGetStudents,
};

module.exports = courseController;