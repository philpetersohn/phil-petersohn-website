const languages = [
  { name: "German", level: "Native" },
  { name: "English", level: "Full professional" },
];

function Languages() {
  return (
    <div className="mb-8 mt-16 w-full">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
        Languages
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {languages.map((language) => (
          <li
            key={language.name}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
          >
            {language.name}
            <span className="text-zinc-500"> · {language.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;
