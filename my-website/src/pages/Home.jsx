import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("fade-in");
  }, []);

  return (
    <section className="flex flex-col items-center opacity-0">
      <h1 className="text-blue-600 text-6xl font-bold mb-8 mt-32">
        Philipp Petersohn
      </h1>
      <h2 className="text-blue-600 text-2xl font-bold mb-8">
        Full Stack Developer | React.js | Node.js | AWS
      </h2>
      <div className="max-w-2xl text-center">
        <p className="text-xl mb-10 max-w-2xl mx-auto">
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
      <div className="flex space-x-8">
        <Link to="/contact">
          <button className="bg-blue-600 text-xl font-semibold text-blue-100 py-3 px-4 rounded-lg hover:bg-blue-400 hover:text-blue-100 transition-colors">
            Get in Touch
          </button>
        </Link>
        <Link to="/about">
          <button className="bg-blue-100 text-xl font-semibold text-blue-600 py-3 px-4 border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-blue-100 transition-colors">
            Learn more about me
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
