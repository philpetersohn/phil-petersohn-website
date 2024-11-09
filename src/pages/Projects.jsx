import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("slide-in");
  }, []);

  const projects = [
    {
      title: "Task Management App",
      description: "I created a task management app using the MERN stack.",
      techStack: [
        "React",
        "JavaScript",
        "TailwindCSS",
        "ChakraUI",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      githubLink: "https://github.com/philpetersohn/nre-mern",
    },
    {
      title: "Next Events",
      description: "I created a next event app using Next.js and TailwindCSS.",
      techStack: [
        "Next.js",
        "JavaScript",
        "TailwindCSS",
        "DaisyUI",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      githubLink: "https://github.com/philpetersohn/next-events",
    },
    {
      title: "My Website",
      description: "I created my own website using React and TailwindCSS.",
      techStack: ["React", "JavaScript", "TailwindCSS", "HTML5", "CSS3"],
      githubLink: "https://github.com/philpetersohn/my-website",
    },
  ];

  return (
    <section className="bg-gray-100 px-8 md:px-16 lg:px-0">
      <div className="container mx-auto">
        <h2 className="text-blue-600 text-4xl md:text-6xl font-bold mt-16 text-center mb-6">
          My Projects
        </h2>
        <div className="flex flex-col space-y-8 mb-8 md:mb-0">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
