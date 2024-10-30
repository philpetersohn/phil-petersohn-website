import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLightbulb } from "react-icons/fa"; // Import the right arrow and info circle icons
import "./home.css";
import me from "../assets/Picture4.jpg";

function Home() {
  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("fade-in");
  }, []);

  return (
    <section className="flex flex-col items-center opacity-0 justify-center min-h-screen px-8 md:px-4 lg:px-0">
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
          Detail-oriented and innovative front-end developer with 3+ years of
          experience in designing dynamic websites, creating responsive designs,
          and enhancing user experience. Proven expertise in collaborating with
          cross-functional teams, gathering requirements and translating them
          into technical specifications, and conducting troubleshooting and
          debugging. Proficient in web architecture, development techniques,
          objection-oriented design (OOP), design patterns, and agile
          methodologies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-12 mb-16">
        <Link to="/contact" className="w-full md:w-auto">
          <button className="w-full md:w-auto bg-blue-600 text-lg md:text-xl font-semibold text-blue-100 py-3 px-10 rounded-lg hover:bg-blue-400 hover:text-blue-100 transition-colors h-14 flex items-center justify-center">
            Get in Touch
            <FaArrowRight className="ml-2" />
          </button>
        </Link>
        <Link to="/about" className="w-full md:w-auto">
          <button className="w-full md:w-auto bg-blue-100 text-lg md:text-xl font-semibold text-blue-600 py-3 px-4 box-border border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-blue-100 transition-colors h-14 flex items-center justify-center">
            Learn more
            <FaLightbulb className="ml-2" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
