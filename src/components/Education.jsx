const schools = [
  {
    title: "Bachelor of Science in Business Informatics",
    place: "IU International University · Online",
  },
  {
    title: "Associate of Science in Engineering",
    place: "Technical University of Berlin · Berlin",
    dates: "January 2012",
  },
];

export default function Education() {
  return (
    <div className="mt-16 w-full">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
        Education
      </h2>
      <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
        {schools.map((school) => (
          <div
            key={school.title}
            className="flex flex-col gap-1 bg-white/[0.03] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="font-medium text-white">{school.title}</h3>
              <p className="text-sm text-zinc-400">{school.place}</p>
            </div>
            {school.dates && (
              <p className="text-sm text-zinc-500">{school.dates}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
