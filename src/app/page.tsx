import {
  ArrowRight,
  BarChart3,
  Building2,
  CreditCard,
  GraduationCap,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Building2,
    title: "Every school, one view",
    body: "Search, block, reset passwords and drill into any school in seconds — no tab-hopping.",
  },
  {
    icon: Zap,
    title: "Command palette",
    body: "Press ⌘K anywhere and jump to schools, plans or reports instantly.",
  },
  {
    icon: CreditCard,
    title: "Plans that renew themselves",
    body: "Track expiries, renewals and blocked logins from a single billing radar.",
  },
  {
    icon: BarChart3,
    title: "Revenue you can read",
    body: "Live KPIs and sparklines replace end-of-term spreadsheet archaeology.",
  },
  {
    icon: ShieldCheck,
    title: "Gatekeeper by default",
    body: "Blocked or expired schools can't sign in. The rule lives in the database, not in hope.",
  },
  {
    icon: GraduationCap,
    title: "Proprietor workspace",
    body: "Sections, staff, classes and students — scoped to each school automatically.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow">
            <GraduationCap className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-bold tracking-tight">FikrahTech</span>
        </span>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-brand-500 px-4 py-2 text-sm font-bold shadow-glow transition hover:bg-brand-400"
          >
            Open command center
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="grid-bg relative mx-auto max-w-6xl px-6 pb-16 pt-14 text-center sm:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 mx-auto h-72 max-w-3xl rounded-full bg-brand-600/25 blur-3xl" />
        <p className="relative mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-brand-200">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          v2 — rebuilt on Next.js + Prisma + Supabase
        </p>
        <h1 className="relative mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Run every school like mission control.
        </h1>
        <p className="relative mx-auto mt-5 max-w-2xl text-balance text-base text-slate-400 sm:text-lg">
          FikrahTech v2 replaces the scattered v1 dashboards with one fast command
          center — schools, sessions, revenue and subscriptions, searchable in a keystroke.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-6 py-3 text-sm font-bold shadow-glow transition hover:bg-brand-400"
          >
            Explore the live demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/schools"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10"
          >
            Browse schools
          </Link>
        </div>

        {/* Mock console preview */}
        <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 text-left shadow-2xl backdrop-blur">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-3 rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400">
              fikrahtech — overview
            </span>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-4">
            {[
              ["Schools", "128"],
              ["Students", "24,806"],
              ["Revenue", "₦4.2M"],
              ["Active plans", "96"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                <p className="text-[11px] font-medium uppercase tracking-widest text-slate-500">{k}</p>
                <p className="mt-1 text-2xl font-bold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-400/40 hover:bg-white/[0.05]"
            >
              <span className="inline-flex rounded-xl bg-brand-500/15 p-2.5 text-brand-300">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xs text-slate-600">
          FikrahTech v2 · Same mission as v1, entirely new interface · Demo data shown
        </p>
      </section>
    </div>
  );
}
