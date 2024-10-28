import { useState } from "react";
import { Link } from "react-router-dom";
import me from "../assets/Picture4.svg"; // Correctly import the image

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-100 text-blue-600 flex justify-between items-center p-4 w-full shadow-md">
      <div className="flex-grow flex justify-start lg:pl-80 md:pl-10">
        <Link to="/home" className="pl-4 md:pl-0">
          <figure>
            <img
              src={me}
              alt="Profile"
              className="w-10 h-10 md:w-20 md:h-20 rounded-full"
            />
          </figure>
        </Link>
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
              to="/home"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center font-semibold"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-blue-700 md:border-none w-full">
            <Link
              to="/about"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center font-semibold"
            >
              About
            </Link>
          </li>
          <li className="border-b border-blue-700 md:border-none w-full">
            <Link
              to="/projects"
              className="block p-4 hover:text-blue-300 hover:scale-105 transition-transform w-full text-center font-semibold"
            >
              Projects
            </Link>
          </li>
          <li className="border-b border-blue-700 md:border-none w-full">
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
