import { KpiCard } from "@/components/kpi-card";
import { StatusBadge } from "@/components/status-badge";
import { Topbar } from "@/components/topbar";
import { activity, demoSchools, kpis } from "@/data/demo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-w-0 flex-1">
      <Topbar title="Mission control" subtitle="2025/2026 session · First term · All schools" />
      <main className="space-y-5 px-4 py-5 sm:px-6">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((k) => (
            <KpiCard key={k.label} {...k} />
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-3">
          <div className="card overflow-hidden xl:col-span-2">
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <h2 className="font-bold tracking-tight">Schools radar</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Highest revenue this term
                </p>
              </div>
              <Link
                href="/schools"
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-500 dark:text-brand-300"
              >
                View all <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="divide-y divide-slate-100 dark:divide-white/5">
              {demoSchools.slice(0, 5).map((s) => (
                <li key={s.id} className="flex items-center gap-3 px-5 py-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-sm font-bold text-brand-600 dark:text-brand-300">
                    {s.name.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{s.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {s.students.toLocaleString()} students · {s.plan}
                    </p>
                  </div>
                  <StatusBadge status={s.status} />
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-5">
            <h2 className="font-bold tracking-tight">Live activity</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Across all tenants</p>
            <ul className="mt-4 space-y-4">
              {activity.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                  <div className="min-w-0">
                    <p className="text-sm">
                      <span className="font-semibold">{a.who}</span>{" "}
                      <span className="text-slate-500 dark:text-slate-400">{a.what}</span>
                    </p>
                    <p className="text-xs text-slate-400">{a.when}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
