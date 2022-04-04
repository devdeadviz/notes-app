import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar p-5">
      <Link className="text-decoration-none" to="/">
        <h3>
          <span>My</span>Notes
        </h3>
      </Link>
    </nav>
  );
};

export { Navbar };
