"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { experience, profile, projects, skills } from "@/data/portfolio";
import { playTick } from "@/lib/sound";
import { useUi } from "@/components/ui-context";

type Line = { id: number; kind: "in" | "out"; text: string };

const welcome = [
  `${profile.name.toLowerCase().replace(" ", "")}@portfolio`,
  "type help to look around",
];

let lineId = 0;
const nextId = () => {
  lineId += 1;
  return lineId;
};

function respond(raw: string): string[] {
  const command = raw.trim().toLowerCase();
  if (!command) return [];
  if (command === "help") {
    return ["help", "about", "skills", "projects", "contact", "clear"];
  }
  if (command === "about") {
    return [profile.role, profile.location, "", profile.bio];
  }
  if (command === "skills") {
    return Object.entries(skills).map(([category, tools]) => `${category}: ${tools.join(", ")}`);
  }
  if (command === "projects") {
    return projects.map((project) => `${project.title} — ${project.summary}`);
  }
  if (command === "contact") {
    return [profile.email, profile.githubLabel, profile.linkedinLabel, profile.location];
  }
  if (command === "clear") return [];
  return [`command not found: ${raw.trim()}`, "type help"];
}

export function Terminal() {
  const { sound } = useUi();
  const [lines, setLines] = useState<Line[]>(() =>
    welcome.map((text) => ({ id: nextId(), kind: "out" as const, text })),
  );
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = scroller.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [lines]);

  const submit = (event?: FormEvent) => {
    event?.preventDefault();
    const typed = value;
    playTick(sound);
    if (typed.trim().toLowerCase() === "clear") {
      setLines(welcome.map((text) => ({ id: nextId(), kind: "out", text })));
      setValue("");
      setHistoryIndex(-1);
      return;
    }
    const output = respond(typed);
    setLines((current) => [
      ...current,
      { id: nextId(), kind: "in", text: typed },
      ...output.map((text) => ({ id: nextId(), kind: "out" as const, text })),
    ]);
    if (typed.trim()) setHistory((current) => [typed, ...current].slice(0, 40));
    setHistoryIndex(-1);
    setValue("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const next = Math.min(history.length - 1, historyIndex + 1);
      setHistoryIndex(next);
      setValue(history[next] ?? "");
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = historyIndex - 1;
      setHistoryIndex(next);
      setValue(next < 0 ? "" : (history[next] ?? ""));
    }
  };

  return (
    <div
      className="flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-line bg-[#070b14] shadow-glow"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 font-mono text-[11px] text-slate-500">
          {profile.name.toLowerCase().split(" ")[0]} — zsh
        </span>
      </div>
      <div ref={scroller} className="flex-1 space-y-1 overflow-y-auto px-4 py-4 font-mono text-sm">
        {lines.map((line) =>
          line.kind === "in" ? (
            <p key={line.id} className="text-slate-100">
              <span className="text-emerald-300">❯ </span>
              {line.text}
            </p>
          ) : (
            <p key={line.id} className="whitespace-pre-wrap text-slate-400">
              {line.text || " "}
            </p>
          ),
        )}
        <p className="sr-only">
          Recent roles: {experience.map((role) => role.company).join(", ")}
        </p>
      </div>
      <form onSubmit={submit} className="border-t border-line px-4 py-3">
        <label className="flex items-center gap-2 font-mono text-sm text-slate-100">
          <span className="text-emerald-300" aria-hidden>
            ❯
          </span>
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={onKeyDown}
            className="term-input w-full bg-transparent outline-none placeholder:text-slate-600"
            placeholder="help"
            aria-label="Terminal command"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
          />
        </label>
      </form>
    </div>
  );
}
