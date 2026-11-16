import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import me from "../assets/Picture4.jpg";

const stack = ["React", "React Native", "Next.js", "TypeScript", "Node.js", "AWS"];

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("fade-in");
  }, []);

  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col justify-center px-6 py-20 opacity-0">
      <div className="pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-300">
            Software Developer
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
            Philipp Petersohn
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            I design and ship production web and mobile apps. Five-plus years
            across React, React Native, Next.js, TypeScript, and Node.js —
            from frontend architecture to APIs, databases, and AWS.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => navigate("/contact")}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Get in touch
            </button>
            <button
              onClick={() => navigate("/about")}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              About me
            </button>
          </div>
        </div>
        <figure className="relative shrink-0 self-start md:self-auto">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-400/30 to-transparent blur-xl" />
          <img
            src={me}
            alt="Philipp Petersohn"
            className="relative h-36 w-36 rounded-[1.6rem] object-cover ring-1 ring-white/15 md:h-52 md:w-52"
          />
        </figure>
      </div>
    </section>
  );
}

export default Home;
