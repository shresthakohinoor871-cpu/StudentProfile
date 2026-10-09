import { Link } from "react-router-dom";

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

function Students() {
  return (
    <div className="page">
      <h1>Students</h1>

      {students.map((student) => (
        <div className="student" key={student.id}>
          <h3>{student.name}</h3>

          <p>Course: {student.course}</p>

          <Link to={`/students/${student.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Students;