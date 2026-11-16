"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { profile } from "@/data/portfolio";
import { playTick } from "@/lib/sound";
import { useUi } from "@/components/ui-context";

type Item = {
  id: string;
  group: string;
  label: string;
  hint: string;
  run: () => void;
};

export function CommandPalette() {
  const { paletteOpen, setPaletteOpen, sound, toggleSound, notify } = useUi();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const close = () => {
    setPaletteOpen(false);
    setQuery("");
    setActive(0);
  };

  const go = (hash: string) => {
    close();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const items = useMemo<Item[]>(() => {
    return [
      { id: "hero", group: "Jump", label: "Hero", hint: "Top of the page", run: () => go("#top") },
      { id: "projects", group: "Jump", label: "Projects", hint: "Bento grid", run: () => go("#projects") },
      { id: "experience", group: "Jump", label: "Experience", hint: "Skills and timeline", run: () => go("#experience") },
      { id: "contact", group: "Jump", label: "Contact", hint: "Email and links", run: () => go("#contact") },
      {
        id: "email",
        group: "Actions",
        label: "Copy email",
        hint: profile.email,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            notify("Email copied");
          } catch {
            notify("Could not copy email");
          }
          close();
        },
      },
      {
        id: "sound",
        group: "Actions",
        label: sound ? "Turn sound off" : "Turn sound on",
        hint: "Interface clicks",
        run: () => {
          toggleSound();
          notify(sound ? "Sound off" : "Sound on");
          close();
        },
      },
      {
        id: "github",
        group: "Links",
        label: "Open GitHub",
        hint: profile.githubLabel,
        run: () => {
          window.open(profile.github, "_blank", "noopener,noreferrer");
          close();
        },
      },
      {
        id: "linkedin",
        group: "Links",
        label: "Open LinkedIn",
        hint: profile.linkedinLabel,
        run: () => {
          window.open(profile.linkedin, "_blank", "noopener,noreferrer");
          close();
        },
      },
    ];
    // close and go are recreated each render; the list only depends on sound.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notify, sound, toggleSound]);

  const filtered = items.filter((item) => {
    const haystack = `${item.label} ${item.hint} ${item.group}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  useEffect(() => {
    if (!paletteOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previous;
      window.cancelAnimationFrame(frame);
    };
  }, [paletteOpen]);

  useEffect(() => {
    setActive(0);
  }, [query, paletteOpen]);

  if (!paletteOpen) return null;

  const choose = (index: number) => {
    const item = filtered[index];
    if (!item) return;
    playTick(sound);
    item.run();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]">
      <button
        className="absolute inset-0 bg-black/70"
        aria-label="Close command palette"
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-[#0c1220] shadow-glow"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            close();
          }
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setActive((current) => (filtered.length ? (current + 1) % filtered.length : 0));
          }
          if (event.key === "ArrowUp") {
            event.preventDefault();
            setActive((current) =>
              filtered.length ? (current - 1 + filtered.length) % filtered.length : 0,
            );
          }
          if (event.key === "Enter") {
            event.preventDefault();
            choose(active);
          }
        }}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Jump, copy, toggle sound…"
          aria-label="Search commands"
          aria-controls={listId}
          aria-activedescendant={filtered[active] ? `${listId}-${filtered[active].id}` : undefined}
          className="w-full border-b border-line bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-slate-500"
        />
        <ul id={listId} role="listbox" className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-slate-500">No matching commands</li>
          )}
          {filtered.map((item, index) => (
            <li key={item.id} role="presentation">
              <button
                id={`${listId}-${item.id}`}
                role="option"
                aria-selected={index === active}
                onMouseEnter={() => setActive(index)}
                onClick={() => choose(index)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left ${
                  index === active ? "bg-white/10 text-white" : "text-slate-300"
                }`}
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    {item.group}
                  </span>
                  <span className="text-sm">{item.label}</span>
                </span>
                <span className="hidden font-mono text-[11px] text-slate-500 sm:block">{item.hint}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 border-t border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
          <span>↑↓ move</span>
          <span>enter select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
