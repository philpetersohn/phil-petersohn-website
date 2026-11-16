const groups = [
  {
    title: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Expo",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "REST APIs",
      "Prisma",
      "Authentication",
      "Serverless",
    ],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Data modeling", "Caching"],
  },
  {
    title: "Cloud",
    items: [
      "AWS",
      "Lambda",
      "S3",
      "Parameter Store",
      "GitHub Actions",
      "CI/CD",
      "Expo EAS",
    ],
  },
  {
    title: "Testing",
    items: ["Jest", "Cypress", "Sentry", "Datadog"],
  },
  {
    title: "AI",
    items: ["Cursor", "Figma", "LLM integration", "OCR"],
  },
];

export default function TechnicalSkills() {
  return (
    <div className="mt-16 w-full">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
        Technical skills
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <h3 className="text-sm font-medium text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
