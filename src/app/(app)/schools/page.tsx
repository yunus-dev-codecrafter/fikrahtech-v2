"use client";

import { StatusBadge } from "@/components/status-badge";
import { Topbar } from "@/components/topbar";
import { demoSchools } from "@/data/demo";
import { Ban, Eye, KeyRound, Search, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";

const filters = ["all", "active", "expired", "blocked"] as const;

export default function SchoolsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return demoSchools.filter((s) => {
      if (filter !== "all" && s.status !== filter) return false;
      if (!q) return true;
      return (s.name + s.email).toLowerCase().includes(q);
    });
  }, [query, filter]);

  return (
    <div className="min-w-0 flex-1">
      <Topbar title="Schools" subtitle={`${rows.length} of ${demoSchools.length} shown · demo data`} />
      <main className="px-4 py-5 sm:px-6">
        <div className="card overflow-hidden">
          <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center dark:border-white/5">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name or email…"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-9 text-sm outline-none placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="flex gap-1.5">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold capitalize transition ${
                    filter === f
                      ? "bg-ink-950 text-white dark:bg-white dark:text-ink-950"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400 dark:border-white/5">
                  <th className="px-5 py-3 font-semibold">School</th>
                  <th className="px-5 py-3 font-semibold">Plan</th>
                  <th className="px-5 py-3 font-semibold">Students</th>
                  <th className="px-5 py-3 font-semibold">Revenue</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {rows.map((s) => (
                  <tr key={s.id} className="transition hover:bg-brand-500/[0.04]">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-sm font-bold text-brand-600 dark:text-brand-300">
                          {s.name.charAt(0)}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate font-semibold">{s.name}</p>
                          <p className="truncate text-xs text-slate-500">{s.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400">{s.plan}</td>
                    <td className="px-5 py-3.5 tabular-nums">{s.students.toLocaleString()}</td>
                    <td className="px-5 py-3.5 tabular-nums">₦{s.revenue.toLocaleString()}</td>
                    <td className="px-5 py-3.5">
                      <StatusBadge status={s.status} />
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex justify-end gap-1">
                        {[
                          { icon: Eye, label: "View" },
                          { icon: KeyRound, label: "Reset password" },
                          { icon: Ban, label: "Block / unblock" },
                          { icon: Trash2, label: "Delete" },
                        ].map((a) => (
                          <button
                            key={a.label}
                            type="button"
                            title={a.label}
                            aria-label={`${a.label} ${s.name}`}
                            className="rounded-lg p-2 text-slate-400 transition hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-300"
                          >
                            <a.icon className="h-4 w-4" />
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-12 text-center text-slate-500">
                      No schools match — try a different search or filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
