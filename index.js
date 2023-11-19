const express = require("express");
const app = express();

// DATABASE
const database = require("./database");

// Body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//SHOW ALL STUDENTS
/*
Route           /
Description     Show all students
Access          Public
Parameter       NONE
Methods         GET
*/
app.get("/", (req, res) => {
  return res.json({ students: database.students });
});

//FILTER STUDENTS BASED ON CLASS
/*
Route           /class
Description     Get students based on class
Access          Public
Parameter       class
Methods         GET
*/
app.get("/class/:class", (req, res) => {
  const getStudentClass = database.students.filter(
    (student) => student.class == req.params.class
  );
  if (getStudentClass.length === 0) {
    return res.json({ error: `No students in class ${req.params.class}` });
  }
  return res.json({ Students: getStudentClass });
});

//FILTER STUDENTS BASED ON PERCENTAGE
/*
Route           /percentage
Description     Get students based on percentage
Access          Public
Parameter       low, high
Methods         GET
*/
app.get("/percentage/:low/:high", (req, res) => {
  const getStudentPercentage = database.students.filter(
    (student) =>
      student.percentage <= req.params.high &&
      student.percentage >= req.params.low
  );
  if (getStudentPercentage.length === 0) {
    return res.json({
      error: `No students has percentage in range( ${req.params.low} -  ${req.params.high})`,
    });
  }
  return res.json({ Students: getStudentPercentage });
});

//FILTER STUDENTS BASED ON GRADE
/*
Route           /grade
Description     Get students based on grade
Access          Public
Parameter       grade
Methods         GET
*/
app.get("/grade/:grade", (req, res) => {
  const getStudentGrade = database.students.filter(
    (student) => student.grade.toLowerCase() === req.params.grade
  );
  if (getStudentGrade.length === 0) {
    return res.json({
      error: `No students with grade: ${req.params.grade}`,
    });
  }
  return res.json({ Students: getStudentGrade });
});

//SPECIFIC STUDENT BASED ON ID
/*
Route           /id
Description     Get students based on id
Access          Public
Parameter       id
Methods         GET
*/
app.get("/id/:id", (req, res) => {
  const getSpecificStudent = database.students.filter(
    (student) => student.id == req.params.id
  );
  if (getSpecificStudent.length === 0) {
    return res.json({
      error: `No student with id: ${req.params.id}`,
    });
  }
  return res.json({ Student: getSpecificStudent });
});

//ADD A STUDENT
/*
Route           /students/new
Description     Add a student
Access          Public
Parameter       None
Methods         POST
*/
app.post("/students/new", (req, res) => {
  const newStudent = req.body;
  database.students.push(newStudent);
  return res.json({ updatedStudents: database.students });
});

//UPDATE A STUDENT RECORD
/*
Route           /students/marks/update
Description     Update a student record
Access          Public
Parameter       None
Methods         PUT
*/
app.put("/students/marks/update", (req, res) => {
  const student = database.students.find(
    (student) => student.id === req.body.id
  );

  student.subjects = req.body.subjects;
  const subjectMarks = Object.values(student.subjects).map(
    (subject) => subject.marks
  );
  const percentage =
    subjectMarks.reduce((total, marks) => total + marks, 0) / 5;
  student.percentage = percentage;
  let grade = "";
  if (percentage > 90) grade = "A+";
  else if (percentage > 80) grade = "A";
  else if (percentage > 70) grade = "B";
  else if (percentage > 60) grade = "C";
  else if (percentage > 50) grade = "D";
  else grade = "F";
  student.grade = grade;
  return res.json({ updatedMarks: student });
});

//DELETE A STUDENT RECORD
/*
Route           /students/delete
Description     Delete a student record
Access          Public
Parameter       id
Methods         DELETE
*/
app.delete("/students/delete/:id", (req, res) => {
  const updatedStudentsDatabase = database.students.filter(
    (student) => student.id !== req.params.id
  );
  database.students = updatedStudentsDatabase;
  return res.json({ Students: database.students });
});

app.listen(3000, () => {
  console.log("Server up and running");
});
