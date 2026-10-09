function Courses() {
  const courses = [
    "BSc. CSIT",
    "BCA",
    "BIT",
    "BIM",
  ];

  return (
    <div className="page">
      <h1>Available Courses</h1>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;