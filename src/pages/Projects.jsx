import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";

const projects = [
  {
    title: "Respark",
    description:
      "Lead manager frontend. Next.js and TypeScript, talking to the API with Axios.",
    techStack: ["Next.js", "React", "TypeScript", "Axios"],
    githubLink: "https://github.com/philpetersohn/respark-app",
    liveLink: "https://respark-app.vercel.app",
  },
  {
    title: "Crown Clothing",
    description:
      "A clothing store with sign-in, a cart, and checkout. React on the front, Firebase behind it.",
    techStack: ["React", "Firebase", "React Router", "styled-components", "Sass"],
    githubLink: "https://github.com/philpetersohn/crwn-clothing",
  },
  {
    title: "Pill List",
    description:
      "A profile editor with pill tags, a photo field, and validation. Built as a reusable React form.",
    techStack: ["React", "Tailwind CSS", "Headless UI", "React Router"],
    githubLink: "https://github.com/philpetersohn/pill-list",
  },
  {
    title: "Team Flow",
    description:
      "HTTP API for team users — list, fetch, and create. Express 5, with Vitest and Supertest.",
    techStack: ["Node.js", "Express", "Vitest", "Supertest"],
    githubLink: "https://github.com/philpetersohn/Team-Flow",
  },
  {
    title: "Invoice App",
    description:
      "Invoice API built for interview prep. Express, Mongoose, and TypeScript.",
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "TypeScript"],
    githubLink: "https://github.com/philpetersohn/invoice-app",
  },
  {
    title: "Mini Message Board",
    description: "A small message board. Express routes, EJS views, and tests.",
    techStack: ["Node.js", "Express", "EJS"],
    githubLink: "https://github.com/philpetersohn/mini-message-board",
  },
  {
    title: "Monsters Rolodex",
    description: "A searchable roster of monster cards. Filter the list as you type.",
    techStack: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/philpetersohn/monsters-rolodex",
  },
  {
    title: "Wild Rydes",
    description:
      "Ride-sharing demo on AWS: accounts with Cognito, rides through Lambda, API Gateway, and DynamoDB.",
    techStack: ["AWS", "Cognito", "Lambda", "API Gateway", "DynamoDB"],
    githubLink: "https://github.com/philpetersohn/wildrydes-site",
  },
  {
    title: "Task Management App",
    description:
      "A task management app built with the MERN stack — React on the front, Express and MongoDB behind it.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Chakra UI",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    githubLink: "https://github.com/philpetersohn/nre-mern",
  },
  {
    title: "Pizza App",
    description: "A React pizza ordering app with a simple, focused interface.",
    techStack: ["React", "JavaScript", "CSS", "HTML", "Node.js"],
    githubLink: "https://github.com/philpetersohn/pizza-app",
  },
  {
    title: "Intro to Node.js",
    description:
      "A small Node.js app that walks through modules, the CLI, and tests with Jest.",
    techStack: ["Node.js", "JavaScript", "npm", "CLI", "Jest"],
    githubLink: "https://github.com/philpetersohn/intro-to-node",
  },
  {
    title: "API design in Node.js",
    description:
      "An Express API in TypeScript, connected to PostgreSQL and covered with Jest.",
    techStack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Jest"],
    githubLink: "https://github.com/philpetersohn/api-design-node",
  },
];

const Projects = () => {
  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("fade-in");
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 opacity-0">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-300">
        Work
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
        Projects
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
        Apps and APIs from GitHub — stores, forms, and services, plus the smaller Node projects.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
