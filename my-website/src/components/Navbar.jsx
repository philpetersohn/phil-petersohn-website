function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <ul className="flex justify-around">
        <li>
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-teal-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
