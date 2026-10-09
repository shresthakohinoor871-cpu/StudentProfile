import { Link, useParams } from "react-router-dom";

const students = [
  {
    id: 1,
    name: "Ram Sharma",
    age: 20,
    course: "BSc. CSIT",
    semester: "2nd Semester",
  },
  {
    id: 2,
    name: "Sita Thapa",
    age: 21,
    course: "BSc. CSIT",
    semester: "2nd Semester",
  },
  {
    id: 3,
    name: "Hari Karki",
    age: 20,
    course: "BCA",
    semester: "3rd Semester",
  },
];

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return (
      <div className="page">
        <h1>Student Not Found</h1>
        <Link to="/students">Back to Students</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Student Details</h1>

      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>Semester: {student.semester}</p>

      <Link to="/students">Back to Students</Link>
    </div>
  );
}

export default StudentDetails;