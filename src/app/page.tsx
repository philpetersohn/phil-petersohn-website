import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { BentoProjects } from "@/components/BentoProjects";
import { SkillsTimeline } from "@/components/SkillsTimeline";
import { Contact } from "@/components/Contact";
import { profile } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="mx-auto flex max-w-6xl flex-col gap-24 px-5 py-16">
        <Hero />
        <BentoProjects />
        <SkillsTimeline />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono text-xs">Press ⌘K or Ctrl+K</p>
        </div>
      </footer>
    </>
  );
}
