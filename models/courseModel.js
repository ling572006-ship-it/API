const { getAllStudents } = require("./StudentModel");

const data = [
    {course_id: "ENG001", course_name:"English"},
    {course_id: "PROG002",conrse_name:"Program Development"},
    {course_id: "WEB003", conrse_name:"Web Development"},
    {course_id: "BIN004", conrse_name:"Business Administration"},
    {course_id: "FIN005", conrse_name:"Finance-Accounting"},
];

const courseModel = {
    getAllStudents: () => data,
};

module.exports = courseModel;