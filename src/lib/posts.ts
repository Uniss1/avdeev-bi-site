import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readingTime: string;
};

function getPostsDir(lang: "en" | "ru") {
  return path.join(process.cwd(), "src", "content", "blog", lang);
}

export function getAllPosts(lang: "en" | "ru"): PostMeta[] {
  const dir = getPostsDir(lang);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      tags: (data.tags as string[]) ?? [],
      summary: (data.summary as string) ?? "",
      readingTime: rt.text,
    };
  });

  // сортировка по дате (новые сверху)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(lang: "en" | "ru", slug: string) {
  const dir = getPostsDir(lang);
  const filePath = path.join(dir, `${slug}.mdx`);

  console.log("LANG:", lang);
  console.log("SLUG:", slug);
  console.log("LOOKING FOR:", filePath);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title as string,
      date: data.date as string,
      tags: (data.tags as string[]) ?? [],
      summary: (data.summary as string) ?? "",
      readingTime: readingTime(content).text,
    } satisfies PostMeta,
    content,
  };
}
