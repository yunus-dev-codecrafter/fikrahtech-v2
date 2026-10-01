import { GraduationCap, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid-bg flex min-h-screen items-center justify-center bg-ink-950 p-4 text-white">
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-ink-900/80 p-8 shadow-2xl backdrop-blur">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow">
          <GraduationCap className="h-6 w-6 text-white" />
        </span>
        <h1 className="mt-5 text-2xl font-extrabold tracking-tight">Welcome back</h1>
        <p className="mt-1 text-sm text-slate-400">Sign in to your command center.</p>
        <form className="mt-6 space-y-3" action="/dashboard">
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">
              Email
            </span>
            <input
              type="email"
              required
              placeholder="you@school.edu"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm outline-none placeholder:text-slate-500 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500">
              Password
            </span>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm outline-none placeholder:text-slate-500 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-2.5 text-sm font-bold shadow-glow transition hover:bg-brand-400"
          >
            <Lock className="h-4 w-4" /> Sign in
          </button>
        </form>
        <p className="mt-5 text-center text-xs text-slate-500">
          Demo only — auth wires up to Supabase next.{" "}
          <Link href="/dashboard" className="font-bold text-brand-300 hover:text-brand-200">
            Skip to demo →
          </Link>
        </p>
      </div>
    </div>
  );
}
