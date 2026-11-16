"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { playTick } from "@/lib/sound";
import { CommandPalette } from "@/components/CommandPalette";
import { UiContext } from "@/components/ui-context";

export { useUi } from "@/components/ui-context";

export function Providers({ children }: { children: React.ReactNode }) {
  const [sound, setSound] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-sound");
    if (stored === "on") setSound(true);
  }, []);

  const toggleSound = useCallback(() => {
    setSound((current) => {
      const next = !current;
      window.localStorage.setItem("portfolio-sound", next ? "on" : "off");
      if (next) playTick(true);
      return next;
    });
  }, []);

  const notify = useCallback((message: string) => {
    setToast(message);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = useMemo(
    () => ({ sound, toggleSound, toast, notify, paletteOpen, setPaletteOpen }),
    [sound, toggleSound, toast, notify, paletteOpen],
  );

  return (
    <UiContext.Provider value={value}>
      {children}
      <CommandPalette />
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full border border-line bg-panel px-4 py-2 font-mono text-xs text-cyan-200 shadow-glow transition ${
          toast ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {toast}
      </div>
    </UiContext.Provider>
  );
}
