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
    <section className="flex flex-col items-center justify-center opacity-0">
      <div className="text-center">
        <h1 className="text-blue-600 text-5xl font-bold mb-6 mt-32">
          About Me
        </h1>
        <p className="text-xl mb-6 max-w-4xl mx-auto">
          Empathetic and versatile Full Stack Software Engineer with over 3
          years of experience in web development. Proficient in React,
          TypeScript and Node.js, with a growing expertise in cloud technologies
          like AWS.
        </p>
        <p className="text-xl mb-6 max-w-4xl mx-auto">
          Passionate about implementing deep work practices to enhance
          productivity and code quality. Committed to continuous learning and
          applying best practices in full stack software development.
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
