import type { MDXContent } from "mdx/types";
import { lazy } from "react";

export type BlogPostMetadata = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  draft: boolean;
};

type BlogPostModule = {
  default: MDXContent;
};

const metadataFiles = import.meta.glob<BlogPostMetadata>("../content/blog/*.mdx", {
  eager: true,
  import: "default",
  query: "?blog-metadata",
});

const articleFiles = import.meta.glob<BlogPostModule>("../content/blog/*.mdx");
const articlePromises = new Map<string, Promise<BlogPostModule>>();

function loadArticle(path: string) {
  const existingPromise = articlePromises.get(path);

  if (existingPromise) {
    return existingPromise;
  }

  const load = articleFiles[path];

  if (!load) {
    throw new Error(`The article content for ${path} is missing.`);
  }

  const promise = load();
  articlePromises.set(path, promise);
  return promise;
}

const articleComponents = new Map(
  Object.keys(articleFiles).map((path) => [path, lazy(() => loadArticle(path))]),
);

const allBlogPosts = Object.values(metadataFiles).toSorted((first, second) =>
  second.publishedAt.localeCompare(first.publishedAt),
);

export const blogPosts = allBlogPosts.filter((post) => import.meta.env.DEV || !post.draft);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostContent(slug: string) {
  return articleComponents.get(`../content/blog/${slug}.mdx`);
}

export async function preloadBlogPostContent(slug: string) {
  await loadArticle(`../content/blog/${slug}.mdx`);
}
