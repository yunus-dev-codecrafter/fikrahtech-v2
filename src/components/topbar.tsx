"use client";

import { Bell, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CommandPalette } from "./command-palette";
import { ThemeToggle } from "./theme-toggle";

export function Topbar({ title, subtitle }: { title: string; subtitle: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-slate-100/80 backdrop-blur dark:border-white/10 dark:bg-ink-950/80">
        <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold tracking-tight sm:text-xl">{title}</h1>
            <p className="truncate text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              {subtitle}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400 transition hover:border-brand-300 hover:text-slate-600 md:flex dark:border-white/10 dark:bg-ink-800 dark:hover:text-slate-300"
            >
              <Search className="h-4 w-4" />
              <span>Quick jump…</span>
              <kbd className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[11px] font-bold dark:bg-white/10">
                ⌘K
              </kbd>
            </button>
            <button
              type="button"
              aria-label="Notifications"
              className="relative rounded-xl border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-ink-800 dark:text-slate-300"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-ink-800" />
            </button>
            <ThemeToggle />
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-bold text-white">
              Y
            </span>
          </div>
        </div>
      </header>
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </>
  );
}
