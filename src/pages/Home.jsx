import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaLightbulb } from "react-icons/fa"; // Import the right arrow and light bulb icons
import "./home.css";
import me from "../assets/Picture4.jpg";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("fade-in");
  }, []);

  const handleGetInTouchClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
    closeDropdown();
  };

  const handleLearnMoreClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
    closeDropdown();
  };

  const closeDropdown = () => {
    const dropdown = document.querySelector(".dropdown-menu");
    if (dropdown) {
      dropdown.classList.remove("block");
      dropdown.classList.add("hidden");
    }
    const navbarButton = document.querySelector("nav button");
    if (navbarButton) {
      navbarButton.textContent = "☰";
    }
  };

  return (
    <section className="flex flex-col items-center opacity-0 justify-center mt-16 px-8 md:px-4 lg:px-0 md:pt-0">
      <figure className="w-32 h-32 md:w-48 md:h-48 mb-6">
        <img
          src={me}
          alt="Profile picture"
          className="rounded-full w-full h-full object-cover"
        />
      </figure>
      <h1 className="text-blue-600 text-4xl md:text-6xl font-bold mb-6 text-center">
        Philipp Petersohn
      </h1>
      <h2 className="text-blue-600 text-2xl md:text-3xl font-bold mb-8 text-center">
        Full Stack Developer | React.js | Node.js | AWS
      </h2>
      <div className="max-w-3xl text-center">
        <p className="text-xl md:text-2xl mb-8 md:mb-11 max-w-3xl mx-auto">
          Detail-oriented and innovative Software Developer with over 3 years of
          experience in building scalable software, responsive websites and web
          applications. Skilled in React, Node.js, Express, and TypeScript, with
          expertise in web architecture, Restful APIs and database management.
          Proven ability to gather requirements, translate them into technical
          solutions, and collaborate with cross-functional teams. Proficient in
          object-oriented programming (OOP), design patterns, troubleshooting,
          and agile methodologies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-12 mb-16">
        <button
          onClick={handleGetInTouchClick}
          className="w-full md:w-auto bg-blue-600 text-lg md:text-xl font-semibold text-blue-100 py-3 px-10 rounded-lg hover:bg-blue-400 hover:text-blue-100 transition-colors h-14 flex items-center justify-center"
        >
          Get in Touch
          <FaArrowRight className="ml-2" />
        </button>
        <button
          onClick={handleLearnMoreClick}
          className="w-full md:w-auto bg-blue-100 text-lg md:text-xl font-semibold text-blue-600 py-3 px-4 box-border border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-blue-100 transition-colors h-14 flex items-center justify-center"
        >
          Learn more
          <FaLightbulb className="ml-2" />
        </button>
      </div>
    </section>
  );
}

export default Home;
