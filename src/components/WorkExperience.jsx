const roles = [
  {
    title: "Senior Frontend Developer",
    company: "Blue Charm Adherence",
    place: "Vancouver, BC",
    dates: "Jan 2026 – Present",
    points: [
      "Lead frontend architecture across a React Native app and a React/TypeScript web platform.",
      "Rebuilt the mobile app from the ground up, owning UX flows, visual design, and component architecture.",
      "Work with a backend developer on APIs, features, and caching so the product holds up end to end.",
      "Contribute to AWS configuration, including Systems Manager Parameter Store.",
      "Mentor two developers through architecture decisions and code reviews.",
      "Introduced an AI-assisted design-to-development workflow with Cursor and Figma, cutting screen implementation time by about 30%.",
      "Improve reliability and security with Sentry, root-cause analysis, and npm vulnerability checks before deploy.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "LvlUp Props",
    place: "Vancouver, BC",
    dates: "Sep 2025 – Dec 2025",
    points: [
      "Took a cross-platform sports analytics product from concept to production in three months with React Native, Expo, and a serverless Next.js backend.",
      "Cut API latency with Redis caching, reaching p95 response times under 500 ms.",
      "Built OCR bet-slip processing and LLM features, with prompt caching and cost controls.",
      "Designed PostgreSQL models and Node.js/Prisma services for workflows and engagement.",
      "Set up auth, monitoring, CI/CD, and multi-environment deploys with GitHub Actions and Expo EAS.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "One Sky Collective",
    place: "Vancouver, BC",
    dates: "Jan 2025 – Aug 2025",
    points: [
      "Led the MVP of a sustainability platform with Next.js, React, TypeScript, and PostgreSQL.",
      "Shipped gamification — challenges and rewards — and raised user engagement by 25%.",
      "Improved rendering and data fetching with server-side rendering, dynamic imports, and React Query.",
      "Built and tuned Node.js APIs so data processing could scale with the product.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "GFT Technologies SE",
    place: "Berlin, Germany",
    dates: "Jan 2024 – Sep 2024",
    points: [
      "Built enterprise frontend applications in React and TypeScript with a maintainable architecture.",
      "Helped cut load times by about 25% through frontend optimization, monitoring, and CI/CD.",
      "Designed serverless AWS infrastructure with Lambda, S3, and Systems Manager Parameter Store.",
      "Strengthened test coverage with Jest and Cypress and reduced production defects.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Thinslices",
    place: "Berlin, Germany",
    dates: "Feb 2021 – Dec 2023",
    points: [
      "Delivered frontend applications with Next.js, React, and TypeScript across client projects.",
      "Implemented AI-driven content categorization, replacing manual work and improving scalability.",
      "Contributed to frontend architecture, code reviews, and Agile delivery on distributed teams.",
    ],
  },
];

function WorkExperience() {
  return (
    <div className="mt-16 w-full">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
        Experience
      </h2>
      <ol className="mt-8 space-y-10 border-l border-white/10 pl-6">
        {roles.map((role) => (
          <li key={role.company + role.dates} className="relative">
            <span className="absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full bg-violet-300 ring-4 ring-zinc-950" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-medium text-white">
                {role.title}
                <span className="text-zinc-400"> · {role.company}</span>
              </h3>
              <p className="shrink-0 text-sm text-zinc-500">{role.dates}</p>
            </div>
            <p className="mt-1 text-sm text-zinc-500">{role.place}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default WorkExperience;
