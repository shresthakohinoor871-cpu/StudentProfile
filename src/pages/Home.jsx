import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Student Portal</h1>

      <p>Manage students and courses easily.</p>

      <Link to="/students">View Students</Link>
      <br />

      <Link to="/courses">View Courses</Link>
    </div>
  );
}

export default Home;