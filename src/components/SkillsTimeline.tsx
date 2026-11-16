"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  experience,
  skillCategories,
  skills,
  type SkillCategory,
} from "@/data/portfolio";
import { playTick } from "@/lib/sound";
import { useUi } from "@/components/ui-context";

export function SkillsTimeline() {
  const { sound } = useUi();
  const [active, setActive] = useState<SkillCategory | null>(null);

  const roles = useMemo(
    () =>
      active ? experience.filter((role) => role.categories.includes(active)) : experience,
    [active],
  );

  const select = (category: SkillCategory) => {
    playTick(sound);
    setActive((current) => (current === category ? null : category));
  };

  return (
    <section id="experience" className="scroll-mt-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-300">Practice</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Stack and experience</h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
        Choose a category to light up the tools and narrow the timeline. Choose it again to see everything.
      </p>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Skill categories">
        {skillCategories.map((category) => {
          const pressed = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={pressed}
              onClick={() => select(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                pressed
                  ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100"
                  : "border-line text-slate-300 hover:border-slate-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => {
          const dimmed = active !== null && active !== category;
          return (
            <div
              key={category}
              className={`rounded-2xl border border-line bg-panel p-4 transition ${
                dimmed ? "opacity-35" : "opacity-100"
              }`}
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
                {category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills[category].map((tool) => (
                  <li
                    key={tool}
                    className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${
                      active === category
                        ? "bg-emerald-400/15 text-emerald-200"
                        : "bg-white/5 text-slate-300"
                    }`}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {active ? `Showing ${active} experience` : "Showing all experience"}
      </p>

      <ol className="mt-10 space-y-8 border-l border-line pl-6">
        <AnimatePresence mode="popLayout">
          {roles.map((role) => (
            <motion.li
              key={role.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="relative"
            >
              <span className="absolute -left-[1.68rem] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300 ring-4 ring-ink" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-medium text-white">
                  {role.title}
                  <span className="text-slate-400"> · {role.company}</span>
                </h3>
                <p className="font-mono text-xs text-slate-500">{role.dates}</p>
              </div>
              <p className="mt-1 text-sm text-slate-500">{role.location}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {role.categories.map((category) => (
                  <li
                    key={category}
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${
                      active === category ? "bg-cyan-300 text-ink" : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-400">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
    </section>
  );
}
