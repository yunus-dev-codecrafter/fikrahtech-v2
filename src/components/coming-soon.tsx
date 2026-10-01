import { Topbar } from "./topbar";

export function ComingSoon({ title, body }: { title: string; body: string }) {
  return (
    <div className="min-w-0 flex-1">
      <Topbar title={title} subtitle="Coming online as routes get wired to Prisma" />
      <main className="px-4 py-5 sm:px-6">
        <div className="card mx-auto max-w-lg p-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500">Next up</p>
          <h2 className="mt-2 text-xl font-extrabold tracking-tight">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{body}</p>
        </div>
      </main>
    </div>
  );
}
