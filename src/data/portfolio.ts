/**
 * Work history, skills, and selected projects come from the resume.
 * Swap copy here without touching the components.
 */

export const profile = {
  name: "Philipp Petersohn",
  role: "Senior Frontend Developer",
  bio: "Full-stack engineer with 5+ years shipping production web and mobile apps in React, React Native, Next.js, TypeScript, and Node.js.",
  location: "Vancouver, BC",
  email: "petersohn.phil@gmail.com",
  github: "https://github.com/philpetersohn",
  githubLabel: "github.com/philpetersohn",
  linkedin: "https://www.linkedin.com/in/philipp-petersohn",
  linkedinLabel: "linkedin.com/in/philipp-petersohn",
};

export type SkillCategory = "Frontend" | "Backend" | "Cloud & DevOps" | "AI/ML";

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Cloud & DevOps",
  "AI/ML",
];

export const skills: Record<SkillCategory, string[]> = {
  Frontend: ["React", "React Native", "Next.js", "TypeScript", "JavaScript", "Expo", "Tailwind CSS"],
  Backend: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "MongoDB", "Redis"],
  "Cloud & DevOps": ["AWS", "Lambda", "S3", "Parameter Store", "GitHub Actions", "Expo EAS", "Sentry", "Datadog"],
  "AI/ML": ["LLM integration", "OCR", "Prompt caching", "Cursor"],
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  status: "Live" | "Shipped";
  engagement: "Full time" | "Project";
  frontend: string[];
  backend: string[];
  architecture: string;
  challenges: string[];
  links: ProjectLink[];
  span: "feature" | "side" | "half";
};

export const projects: Project[] = [
  {
    id: "blue-charm",
    title: "Blue Charm",
    summary:
      "The patient and life-sciences product at bluecharm.io. I lead the React web frontend and rebuilt the React Native app.",
    status: "Live",
    engagement: "Full time",
    frontend: ["React Native", "React", "TypeScript"],
    backend: ["APIs", "AWS", "Parameter Store", "Sentry"],
    architecture:
      "Blue Charm is a medication-adherence platform. I own the frontend across the React Native app and the React/TypeScript web product, from UX flows through component architecture. I work with a backend developer on APIs, caching, and AWS configuration, including Systems Manager Parameter Store. The public site is bluecharm.io.",
    challenges: [
      "Rebuilt the mobile app from the ground up without dropping the web platform.",
      "Brought Cursor and Figma into the design-to-code path, cutting screen implementation time by about 30%.",
      "Kept releases safer with Sentry, root-cause analysis, and dependency checks before deploy.",
    ],
    links: [{ label: "Website", href: "https://bluecharm.io/" }],
    span: "feature",
  },
  {
    id: "lvlup",
    title: "LVLup Props",
    summary:
      "A player-prop research app for NFL, NBA, and MLB. I took it from concept to the App Store and Google Play in three months.",
    status: "Live",
    engagement: "Project",
    frontend: ["React Native", "Expo", "TypeScript"],
    backend: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Redis"],
    architecture:
      "LVLup is a cross-platform sports analytics product. I built the React Native and Expo client and a serverless Next.js backend, with PostgreSQL and Prisma for the data model. Redis caching brought p95 API responses under 500 ms. OCR reads bet slips, and LLM features use prompt caching so cost stays in check. Auth, monitoring, and multi-environment deploys run through GitHub Actions and Expo EAS.",
    challenges: [
      "Shipped a mobile client and a serverless backend in one three-month window.",
      "Kept bet-slip OCR and model calls useful without letting prompt cost run away.",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/lvlup-props-prop-finder/id6758404615",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=ai.lvlupprops.lvlup",
      },
    ],
    span: "side",
  },
  {
    id: "one-sky",
    title: "One Sky Collective",
    summary:
      "A sustainability app on Google Play. Daily habits become points, trees planted, and ocean plastic removed.",
    status: "Live",
    engagement: "Project",
    frontend: ["Next.js", "React", "TypeScript"],
    backend: ["Node.js", "PostgreSQL", "React Query"],
    architecture:
      "One Sky Collective is a gamified sustainability product. I led the MVP with Next.js, React, TypeScript, and PostgreSQL: challenges, rewards, and the data-fetching path behind them. Server-side rendering, dynamic imports, and React Query tightened how the app loaded. The Android app is on Google Play.",
    challenges: [
      "Designed challenges and rewards that raised user engagement by 25%.",
      "Improved rendering and data fetching without slowing the Node APIs behind the actions.",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.onesky.oneskyapp",
      },
      { label: "Website", href: "https://www.oneskycollective.org/" },
    ],
    span: "side",
  },
  {
    id: "gft",
    title: "GFT Technologies",
    summary:
      "Enterprise React and TypeScript frontends, plus the serverless AWS around them, while I was a frontend developer at GFT.",
    status: "Live",
    engagement: "Full time",
    frontend: ["React", "TypeScript"],
    backend: ["AWS Lambda", "S3", "Parameter Store", "Jest", "Cypress"],
    architecture:
      "At GFT I built enterprise frontend applications in React and TypeScript and the serverless path beside them: Lambda, S3, and Systems Manager Parameter Store. Jest and Cypress raised test coverage. Load times improved by about 25% through frontend work, monitoring, and CI/CD. GFT is the company: gft.com.",
    challenges: [
      "Kept a large React codebase maintainable while cutting load time.",
      "Reduced production defects by strengthening automated coverage before release.",
    ],
    links: [{ label: "Website", href: "https://www.gft.com/int/en" }],
    span: "half",
  },
  {
    id: "thinslices",
    title: "Thinslices",
    summary:
      "Client products in Next.js, React, and TypeScript, including AI content categorization, during three years at Thinslices.",
    status: "Live",
    engagement: "Full time",
    frontend: ["Next.js", "React", "TypeScript"],
    backend: [],
    architecture:
      "Thinslices is a product studio. I delivered frontend applications across client projects with Next.js, React, and TypeScript, joined architecture decisions and code reviews, and shipped an AI categorization flow that replaced manual tagging. The studio site is thinslices.com.",
    challenges: [
      "Kept one frontend approach consistent across several client codebases.",
      "Replaced manual content categorization with an AI workflow so the products could scale.",
    ],
    links: [{ label: "Website", href: "https://www.thinslices.com/" }],
    span: "half",
  },
];

export type Role = {
  id: string;
  title: string;
  company: string;
  dates: string;
  location: string;
  categories: SkillCategory[];
  points: string[];
};

export const experience: Role[] = [
  {
    id: "blue-charm",
    title: "Senior Frontend Developer",
    company: "Blue Charm Adherence",
    dates: "Jan 2026 — Present",
    location: "Vancouver, BC",
    categories: ["Frontend", "Cloud & DevOps", "AI/ML"],
    points: [
      "Lead frontend architecture across a React Native app and a React/TypeScript web platform.",
      "Rebuilt the mobile app from the ground up, owning UX flows, visual design, and component architecture.",
      "Work with a backend developer on APIs, features, and caching.",
      "Contribute to AWS configuration, including Systems Manager Parameter Store.",
      "Mentor two developers through architecture decisions and code reviews.",
      "Introduced a Cursor and Figma workflow that cut screen implementation time by about 30%.",
      "Improve reliability and security with Sentry, root-cause analysis, and npm vulnerability checks before deploy.",
    ],
  },
  {
    id: "lvlup",
    title: "Full-Stack Developer",
    company: "LvlUp Props",
    dates: "Sep 2025 — Dec 2025",
    location: "Vancouver, BC",
    categories: ["Frontend", "Backend", "Cloud & DevOps", "AI/ML"],
    points: [
      "Took a cross-platform sports analytics product from concept to production in three months with React Native, Expo, and a serverless Next.js backend.",
      "Cut API latency with Redis caching, reaching p95 response times under 500 ms.",
      "Built OCR bet-slip processing and LLM features, with prompt caching and cost controls.",
      "Designed PostgreSQL models and Node.js/Prisma services for workflows and engagement.",
      "Set up auth, monitoring, CI/CD, and multi-environment deploys with GitHub Actions and Expo EAS.",
    ],
  },
  {
    id: "one-sky",
    title: "Full-Stack Developer",
    company: "One Sky Collective",
    dates: "Jan 2025 — Aug 2025",
    location: "Vancouver, BC",
    categories: ["Frontend", "Backend"],
    points: [
      "Led the MVP of a sustainability platform with Next.js, React, TypeScript, and PostgreSQL.",
      "Shipped gamification — challenges and rewards — and raised user engagement by 25%.",
      "Improved rendering and data fetching with server-side rendering, dynamic imports, and React Query.",
      "Built and tuned Node.js APIs so data processing could scale with the product.",
    ],
  },
  {
    id: "gft",
    title: "Frontend Developer",
    company: "GFT Technologies SE",
    dates: "Jan 2024 — Sep 2024",
    location: "Berlin, Germany",
    categories: ["Frontend", "Cloud & DevOps"],
    points: [
      "Built enterprise frontend applications in React and TypeScript with a maintainable architecture.",
      "Helped cut load times by about 25% through frontend optimization, monitoring, and CI/CD.",
      "Designed serverless AWS infrastructure with Lambda, S3, and Systems Manager Parameter Store.",
      "Strengthened test coverage with Jest and Cypress and reduced production defects.",
    ],
  },
  {
    id: "thinslices",
    title: "Frontend Developer",
    company: "Thinslices",
    dates: "Feb 2021 — Dec 2023",
    location: "Berlin, Germany",
    categories: ["Frontend", "AI/ML"],
    points: [
      "Delivered frontend applications with Next.js, React, and TypeScript across client projects.",
      "Implemented AI-driven content categorization, replacing manual work and improving scalability.",
      "Contributed to frontend architecture, code reviews, and Agile delivery on distributed teams.",
    ],
  },
];
