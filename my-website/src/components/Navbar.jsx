import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="">
      <diV>
        <button>
          <Link to="/" className="text-black">
            PP
          </Link>
        </button>
      </diV>
      <div>
        <ul className="flex justify-center space-x-8 text-white font-medium text-lg">
          <li>
            <Link to="/about" className="text-black">
              About
            </Link>
          </li>
          <li>
            <Link to="/home" className="text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-black">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
