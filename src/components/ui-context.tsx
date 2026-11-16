"use client";

import { createContext, useContext } from "react";

export type UiContextValue = {
  sound: boolean;
  toggleSound: () => void;
  toast: string | null;
  notify: (message: string) => void;
  paletteOpen: boolean;
  setPaletteOpen: (open: boolean) => void;
};

export const UiContext = createContext<UiContextValue | null>(null);

export function useUi() {
  const value = useContext(UiContext);
  if (!value) throw new Error("useUi must be used within Providers");
  return value;
}
