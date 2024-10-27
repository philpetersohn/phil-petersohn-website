import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="hover:text-teal-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-teal-400">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-teal-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
