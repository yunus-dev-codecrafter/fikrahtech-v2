import { cn } from "@/lib/utils";

const tones: Record<string, string> = {
  active:
    "bg-emerald-500/10 text-emerald-700 ring-emerald-500/25 dark:text-emerald-300",
  blocked: "bg-rose-500/10 text-rose-700 ring-rose-500/25 dark:text-rose-300",
  expired: "bg-amber-500/10 text-amber-700 ring-amber-500/25 dark:text-amber-300",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset",
        tones[status] ?? tones.active
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status[0].toUpperCase() + status.slice(1)}
    </span>
  );
}
