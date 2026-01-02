import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("ru", slug);

  if (!post) {
    return {
      title: "Пост не найден — Avdeev",
    };
  }

  const { meta } = post;

  return {
    title: `${meta.title} — Avdeev`,
    description: meta.summary,
    alternates: {
      canonical: `https://avdeev-bi.pro/ru/blog/${meta.slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.summary,
      url: `https://avdeev-bi.pro/ru/blog/${meta.slug}`,
      siteName: "Avdeev",
      type: "article",
    },
  };
}
