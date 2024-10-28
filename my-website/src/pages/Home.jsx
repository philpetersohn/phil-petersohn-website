import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("fade-in");
  }, []);

  return (
    <section className="flex flex-col items-center opacity-0 justify-center min-h-screen px-8 md:px-4 lg:px-0">
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
      <div className="flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-12">
        <Link to="/contact" className="w-full md:w-auto">
          <button className="w-full md:w-auto bg-blue-600 text-lg md:text-xl font-semibold text-blue-100 py-3 px-10 rounded-lg hover:bg-blue-400 hover:text-blue-100 transition-colors">
            Get in Touch
          </button>
        </Link>
        <Link to="/about" className="w-full md:w-auto">
          <button className="w-full md:w-auto bg-blue-100 text-lg md:text-xl font-semibold text-blue-600 py-3 px-4 border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-blue-100 transition-colors">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;