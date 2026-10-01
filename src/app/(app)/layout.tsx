import { Sidebar } from "@/components/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {/* Mobile top brand bar */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2 border-b border-slate-200/70 bg-ink-950 px-4 py-3 text-white lg:hidden dark:border-white/10">
          <span className="text-sm font-bold">FikrahTech</span>
          <span className="rounded-md bg-brand-500/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand-300">
            v2
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
