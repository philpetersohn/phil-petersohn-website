import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-100 text-blue-600 flex justify-between items-center p-4 w-full">
      <div className="flex-grow flex justify-start">
        <button className="text-xl font-bold">
          <Link to="/" className="">
            PP
          </Link>
        </button>
      </div>
      <div className="relative">
        <button className="block md:hidden" onClick={toggleDropdown}>
          ☰
        </button>
        <ul
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-100 md:flex md:space-x-10 md:static md:w-auto`}
        >
          <li className="border-b border-blue-700 md:border-none w-full">
            <Link
              to="/about"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center"
            >
              About
            </Link>
          </li>
          <li className="border-b border-blue-700 md:border-none w-full">
            <Link
              to="/home"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-blue-700 md:border-none w-full">
            <Link
              to="/projects"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center"
            >
              Projects
            </Link>
          </li>
          <li className="border-b border-blue-700 md:border-none w-full">
            <Link
              to="/contact"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
