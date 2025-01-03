import { useEffect } from "react";
import WorkExperience from "../components/WorkExperience";
import TechnicalSkills from "../components/TechnicalSkills";
import CoreCompetencies from "../components/CoreCompetencies";
import Education from "../components/Education";
import Languages from "../components/Languages";

function About() {
  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("slide-in");
  }, []);

  return (
    <section className="flex flex-col items-center justify-center opacity-0 min-h-screen px-8 md:px-16 lg:px-0">
      <div className="text-center">
        <h1 className="text-blue-600 text-4xl md:text-6xl font-bold mt-16">
          About Me
        </h1>
        <p className="text-xl md:text-2xl mt-8 max-w-5xl mx-auto px-4">
          Empathetic and versatile Software Engineer with over 3 years of
          experience in web development. Proficient in React, TypeScript and
          Node.js, with a growing expertise in cloud technologies like Amazon
          Web Services.
        </p>
        <p className="text-xl md:text-2xl mt-4 md:my-6 max-w-5xl mx-auto px-4">
          Passionate about implementing deep work practices to enhance
          productivity and code quality. Committed to continuous learning and
          applying best practices in software development.
        </p>
      </div>
      <CoreCompetencies />
      <TechnicalSkills />
      <WorkExperience />
      <Education />
      <Languages />
    </section>
  );
}

export default About;
