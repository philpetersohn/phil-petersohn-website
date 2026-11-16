"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { useUi } from "@/components/ui-context";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const { setPaletteOpen } = useUi();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm tracking-tight text-white">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-slate-300 hover:text-white"
          >
            Commands
            <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">⌘K</kbd>
          </button>
        </nav>
        <button
          type="button"
          className="rounded-full border border-line px-3 py-1.5 text-sm text-slate-200 md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-line px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-slate-300"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setPaletteOpen(true);
              }}
              className="rounded-lg px-2 py-2 text-left text-sm text-cyan-200"
            >
              Open command palette
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
