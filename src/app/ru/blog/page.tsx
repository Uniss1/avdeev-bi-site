import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogRuPage() {
  const posts = getAllPosts("ru");

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-zinc-600">Блог</p>
        <h1 className="text-3xl font-semibold tracking-tight">Заметки и кейсы</h1>
        <p className="max-w-2xl text-zinc-700">
          Пишу про data engineering, BI, SQL, dbt и развитие портфолио.
        </p>
      </header>

      <div className="space-y-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/ru/blog/${p.slug}`}
            className="block rounded-2xl border border-zinc-200 p-6 hover:bg-zinc-50"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-xs text-zinc-500">{p.date} • {p.readingTime}</p>
            </div>
            <p className="mt-2 text-sm text-zinc-700">{p.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
