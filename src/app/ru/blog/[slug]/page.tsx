import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export default async function BlogPostRuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug("ru", slug);
  if (!post) return notFound();

  const { meta, content } = post;

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <Link href="/ru/blog" className="text-sm text-zinc-600 hover:text-zinc-900">
          ← Назад к блогу
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight">{meta.title}</h1>
        <p className="text-sm text-zinc-500">
          {meta.date} • {meta.readingTime}
        </p>
        <p className="max-w-2xl text-zinc-700">{meta.summary}</p>
      </header>

      <div className="prose prose-zinc max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
