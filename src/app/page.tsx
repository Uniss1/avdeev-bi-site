import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="space-y-5">
        <p className="text-sm text-zinc-600">Data Engineer / BI Analyst</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          I build reliable data pipelines, models, and analytics.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-700">
          I’m building my portfolio in public: data engineering case studies, BI projects,
          and practical notes on SQL, dbt, and Python.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/resume"
            className="rounded-xl bg-zinc-900 px-5 py-2 text-sm text-white hover:bg-zinc-800"
          >
            View Resume
          </Link>
          <Link
            href="/projects"
            className="rounded-xl border border-zinc-200 px-5 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Projects (Soon)
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-zinc-200 px-5 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Read Blog
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">What I do</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• ETL/ELT pipelines</li>
            <li>• Data warehouse modeling</li>
            <li>• BI dashboards & analytics</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">What I’m learning now</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• dbt best practices</li>
            <li>• orchestration patterns</li>
            <li>• data quality & testing</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">Open to</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• Full-time roles</li>
            <li>• BI / analytics consulting</li>
            <li>• Freelance / part-time</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold">Latest posts</h2>
          <Link href="/blog" className="text-sm text-zinc-600 hover:text-zinc-900">
            View all →
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-700">
            No posts yet. Coming soon.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl border border-zinc-200 p-5 hover:bg-zinc-50"
              >
                <p className="text-xs text-zinc-500">
                  {p.date} • {p.readingTime}
                </p>
                <h3 className="mt-2 text-sm font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 line-clamp-3">
                  {p.summary}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
