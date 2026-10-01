"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  Building2,
  CalendarDays,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/schools", label: "Schools", icon: Building2 },
  { href: "/sessions", label: "Sessions", icon: CalendarDays },
  { href: "/revenue", label: "Revenue", icon: BarChart3 },
  { href: "/subscriptions", label: "Plans", icon: CreditCard },
  { href: "/staff", label: "Staff", icon: Users },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-ink-950 text-slate-300 lg:flex">
      <Link href="/" className="flex items-center gap-2.5 px-6 pb-6 pt-7">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow">
          <GraduationCap className="h-5 w-5 text-white" />
        </span>
        <span className="text-lg font-bold tracking-tight text-white">
          FikrahTech
          <span className="ml-1.5 rounded-md bg-brand-500/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand-300">
            v2
          </span>
        </span>
      </Link>
      <nav className="flex-1 space-y-1 px-3">
        {nav.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                active
                  ? "bg-brand-500/15 text-white ring-1 ring-inset ring-brand-400/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon
                className={cn(
                  "h-[1.15rem] w-[1.15rem]",
                  active ? "text-brand-300" : "text-slate-500 group-hover:text-slate-300"
                )}
              />
              {item.label}
              {item.label === "Schools" && (
                <span className="ml-auto rounded-full bg-brand-500/20 px-2 py-0.5 text-[11px] font-bold text-brand-200">
                  128
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      <div className="p-4">
        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white">
          <p className="text-sm font-bold">2025/2026 session live</p>
          <p className="mt-0.5 text-xs text-brand-100">
            96 of 128 schools on active plans.
          </p>
          <Link
            href="/subscriptions"
            className="mt-3 inline-block rounded-lg bg-white/15 px-3 py-1.5 text-xs font-bold hover:bg-white/25"
          >
            Review renewals
          </Link>
        </div>
      </div>
    </aside>
  );
}
