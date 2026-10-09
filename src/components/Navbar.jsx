import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Student Portal</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;