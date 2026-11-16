"use client";

import { profile } from "@/data/portfolio";
import { playTick } from "@/lib/sound";
import { useUi } from "@/components/ui-context";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: profile.githubLabel, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
];

export function Contact() {
  const { sound, notify } = useUi();

  return (
    <section id="contact" className="scroll-mt-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-300">Contact</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Start a conversation.</h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
        A project, a question, or a note about the terminal. I read everything.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={() => playTick(sound)}
            className="rounded-2xl border border-line bg-panel px-4 py-4 transition hover:border-cyan-300/40"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
              {channel.label}
            </p>
            <p className="mt-2 break-all text-sm text-white">{channel.value}</p>
          </a>
        ))}
      </div>
      <button
        type="button"
        onClick={async () => {
          playTick(sound);
          try {
            await navigator.clipboard.writeText(profile.email);
            notify("Email copied");
          } catch {
            notify("Could not copy email");
          }
        }}
        className="mt-4 font-mono text-xs text-cyan-200 hover:text-cyan-100"
      >
        Copy email
      </button>
    </section>
  );
}
