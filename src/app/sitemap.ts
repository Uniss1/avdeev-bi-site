import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://avdeev-bi.pro";

  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/blog",
    "/resume",
    "/contact",
    "/ru",
    "/ru/about",
    "/ru/projects",
    "/ru/blog",
    "/ru/resume",
    "/ru/contact",
  ];

  const enPosts = getAllPosts("en").map((p) => `/blog/${p.slug}`);
  const ruPosts = getAllPosts("ru").map((p) => `/ru/blog/${p.slug}`);

  const routes = [...staticRoutes, ...enPosts, ...ruPosts];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
