"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Terminal } from "@/components/Terminal";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-300">
          {profile.location}
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-cyan-100">{profile.role}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">{profile.bio}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm text-white hover:bg-white/5"
          >
            Contact
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="min-h-[22rem]"
      >
        <Terminal />
      </motion.div>
    </section>
  );
}
