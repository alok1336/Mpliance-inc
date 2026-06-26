export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-4 h-48 rounded-lg bg-slate-200" />

      <div className="mb-2 h-4 w-24 rounded bg-slate-200" />

      <div className="mb-4 h-6 w-3/4 rounded bg-slate-200" />

      <div className="h-10 w-32 rounded bg-slate-200" />
    </div>
  );
}