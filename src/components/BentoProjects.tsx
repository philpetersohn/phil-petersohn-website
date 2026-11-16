"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { projects } from "@/data/portfolio";
import { playTick } from "@/lib/sound";
import { SpotlightCard } from "@/components/SpotlightCard";
import { useUi } from "@/components/ui-context";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const [stack, setStack] = useState<"frontend" | "backend">("frontend");
  const hasBackend = project.backend.length > 0;
  const chips = stack === "backend" && hasBackend ? project.backend : project.frontend;
  const span =
    project.span === "feature"
      ? "md:col-span-2 lg:col-span-4"
      : project.span === "half"
        ? "lg:col-span-3"
        : "lg:col-span-2";

  return (
    <SpotlightCard className={`min-h-[16rem] ${span}`} >
      <article className="flex h-full flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.status === "Live" ? "bg-emerald-400" : "bg-slate-400"
              }`}
            />
            {project.status}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            {project.engagement}
          </span>
        </div>
        <h3 className="mt-4 font-sans text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{project.summary}</p>

        <div className="mt-auto pt-5">
          {hasBackend && (
            <div
              className="mb-4 inline-flex rounded-full border border-line p-1"
              onClick={(event) => event.stopPropagation()}
            >
              {(["frontend", "backend"] as const).map((side) => (
                <button
                  key={side}
                  type="button"
                  aria-pressed={stack === side}
                  onClick={() => setStack(side)}
                  className={`rounded-full px-3 py-1 font-mono text-[11px] capitalize ${
                    stack === side ? "bg-white text-ink" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {side}
                </button>
              ))}
            </div>
          )}
          <ul className="mb-4 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300"
              >
                {chip}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-sm font-medium text-cyan-200 hover:text-cyan-100"
          >
            View architecture
          </button>
        </div>
      </article>
    </SpotlightCard>
  );
}

function Drawer({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const reduce = useReducedMotion();
  const openedAt = useRef(0);

  useEffect(() => {
    if (!project) return;
    openedAt.current = Date.now();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="fixed inset-0 z-[60]" role="presentation">
          <motion.button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-black/70"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (Date.now() - openedAt.current < 350) return;
              onClose();
            }}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-lg flex-col border-l border-line bg-[#0c1220]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                  {project.status} · {project.engagement}
                </p>
                <h2 id="project-title" className="mt-2 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-line px-3 py-1 text-sm text-slate-300 hover:text-white"
                autoFocus
              >
                Close
              </button>
            </div>
            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
              <p className="text-sm leading-relaxed text-slate-300">{project.architecture}</p>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  Challenges
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
                  {project.challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={`grid gap-4 ${project.backend.length > 0 ? "sm:grid-cols-2" : ""}`}>
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Frontend
                  </h3>
                  <ul className="mt-2 space-y-1 font-mono text-xs text-cyan-100">
                    {project.frontend.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                {project.backend.length > 0 && (
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      Backend
                    </h3>
                    <ul className="mt-2 space-y-1 font-mono text-xs text-emerald-100">
                      {project.backend.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 border-t border-line px-6 py-4">
              {project.links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    index === 0
                      ? "rounded-full bg-white px-4 py-2 text-sm font-medium text-ink"
                      : "rounded-full border border-line px-4 py-2 text-sm text-white"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function BentoProjects() {
  const { sound } = useUi();
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-300">Work</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Selected projects</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={(next) => {
              playTick(sound);
              setOpen(next);
            }}
          />
        ))}
      </div>
      <Drawer project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
