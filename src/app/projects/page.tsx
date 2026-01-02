export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-zinc-600">Projects</p>
        <h1 className="text-3xl font-semibold tracking-tight">Case studies & portfolio</h1>
        <p className="max-w-2xl text-zinc-700">
          I’m currently building my portfolio in public. First case studies will cover an end-to-end mini DWH,
          dbt modeling, and data quality tooling.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">Mini Data Warehouse</h2>
          <p className="mt-2 text-sm text-zinc-700">
            End-to-end pipeline from a public dataset → staging → marts → dashboard.
          </p>
          <p className="mt-3 text-xs text-zinc-500">Status: in progress</p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">Data Quality Toolkit</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Reusable tests and checks for analytics pipelines.
          </p>
          <p className="mt-3 text-xs text-zinc-500">Status: planned</p>
        </div>
      </div>
    </div>
  );
}
