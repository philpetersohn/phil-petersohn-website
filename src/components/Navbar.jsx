import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-100 text-blue-600 flex justify-between items-center p-4 w-full shadow-md">
      <div className="flex-grow flex justify-start  md:pl-10 lg:mx-20">
        <Link to="/home" className="pl-4 md:pl-0 font-bold text-2xl">
          PP
        </Link>
      </div>
      <div className="absolut">
        <button
          className="block md:hidden font-bold text-xl mx-4"
          onClick={toggleDropdown}
        >
          {isDropdownOpen ? "✕" : "☰"}
        </button>
        <ul
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-100 md:flex md:space-x-10 md:static md:w-auto z-10`}
        >
          <li className=" md:border-none w-full">
            <Link
              to="/home"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center font-semibold"
            >
              Home
            </Link>
          </li>
          <li className=" md:border-none w-full">
            <Link
              to="/about"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center font-semibold"
            >
              About
            </Link>
          </li>
          <li className=" md:border-none w-full">
            <Link
              to="/projects"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center font-semibold"
            >
              Projects
            </Link>
          </li>
          <li
            className={`md:border-none lg:border-none w-full md:shadow-none ${
              isDropdownOpen ? "shadow-lg" : ""
            }`}
          >
            <Link
              to="/contact"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center font-semibold"
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
