function Sparkline({ points }: { points: number[] }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(max - min, 1);
  const coords = points
    .map((p, i) => `${(i / (points.length - 1)) * 100},${28 - ((p - min) / range) * 24}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 32" className="h-8 w-24" aria-hidden="true">
      <polyline
        points={coords}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-500"
      />
    </svg>
  );
}

export function KpiCard({
  label,
  value,
  delta,
  spark,
}: {
  label: string;
  value: string;
  delta: string;
  spark: number[];
}) {
  return (
    <div className="card animate-fade-up p-5">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <div className="mt-1 flex items-end justify-between gap-2">
        <div>
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            {delta}
          </p>
        </div>
        <Sparkline points={spark} />
      </div>
    </div>
  );
}
