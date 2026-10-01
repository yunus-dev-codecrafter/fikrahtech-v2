"use client";

import { Building2, CreditCard, LayoutDashboard, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const actions = [
  { href: "/dashboard", label: "Go to Overview", icon: LayoutDashboard, hint: "Kpis, activity" },
  { href: "/schools", label: "Go to Schools", icon: Building2, hint: "Search, block, reset" },
  { href: "/subscriptions", label: "Go to Plans", icon: CreditCard, hint: "Renewals, billing" },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("");
  }, [open ]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => (a.label + a.hint).toLowerCase().includes(q));
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink-950/60 p-4 pt-[12vh] backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl dark:bg-ink-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-slate-200 px-4 dark:border-white/10">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to schools, plans, reports…"
            className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-slate-400"
          />
          <kbd className="rounded-md border border-slate-200 px-1.5 py-0.5 text-[11px] font-semibold text-slate-400 dark:border-white/10">
            ESC
          </kbd>
        </div>
        <ul className="max-h-64 overflow-y-auto p-2">
          {results.map((a) => (
            <li key={a.href}>
              <Link
                href={a.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:bg-brand-500/10"
              >
                <span className="rounded-lg bg-brand-500/10 p-1.5 text-brand-600 dark:text-brand-300">
                  <a.icon className="h-4 w-4" />
                </span>
                <span className="font-medium">{a.label}</span>
                <span className="ml-auto text-xs text-slate-400">{a.hint}</span>
              </Link>
            </li>
          ))}
          {results.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-slate-500">
              No matches — try “schools”.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
