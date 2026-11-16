import { useEffect } from "react";
import WorkExperience from "../components/WorkExperience";
import TechnicalSkills from "../components/TechnicalSkills";
import Education from "../components/Education";
import Languages from "../components/Languages";

function About() {
  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("fade-in");
  }, []);

  return (
    <section className="mx-auto flex max-w-5xl flex-col px-6 py-20 opacity-0">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-300">
        Resume
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
        Full-stack engineer.
      </h1>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-zinc-400 md:text-lg">
        <p>
          Five-plus years designing, architecting, and delivering production
          web and mobile applications with React, React Native, Next.js,
          TypeScript, and Node.js.
        </p>
        <p>
          I work across frontend architecture, APIs, databases, caching, and
          AWS — taking products from concept to production, and using
          AI-assisted workflows where they actually save time.
        </p>
      </div>
      <TechnicalSkills />
      <WorkExperience />
      <Education />
      <Languages />
    </section>
  );
}

export default About;
