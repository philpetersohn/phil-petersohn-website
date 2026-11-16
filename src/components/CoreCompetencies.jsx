const competencies = [
  "Full stack — React, TypeScript, Node.js, Express, MongoDB",
  "Cloud technologies (AWS)",
  "Database design and management",
  "RESTful API development",
  "Responsive web design",
  "Problem-solving and debugging",
  "Version control (Git)",
  "Agile — Scrum and Kanban",
  "Deep work and productivity",
  "Continuous learning",
];

export default function CoreCompetencies() {
  return (
    <div className="mt-16 w-full">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
        Core competencies
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {competencies.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
