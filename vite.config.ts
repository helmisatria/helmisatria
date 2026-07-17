import { readFile } from "node:fs/promises";
import path from "node:path";
import { cloudflare } from "@cloudflare/vite-plugin";
import mdx from "@mdx-js/rollup";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig, type Plugin } from "vite";

const blogMetadataQuery = "blog-metadata";
const blogMetadataFields = ["title", "description", "publishedAt", "updatedAt"] as const;

function blogMetadataPlugin(): Plugin {
  return {
    name: "blog-metadata",
    enforce: "pre",
    async load(id) {
      const [filePath, query] = id.split("?", 2);

      if (query !== blogMetadataQuery || !filePath) {
        return null;
      }

      const { data } = matter(await readFile(filePath, "utf8"));

      for (const field of blogMetadataFields) {
        if (typeof data[field] !== "string" || !data[field].trim()) {
          throw new TypeError(`${path.basename(filePath)} needs a non-empty ${field} field.`);
        }
      }

      if (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== "string" || !tag.trim())) {
        throw new TypeError(`${path.basename(filePath)} needs at least one valid tag.`);
      }

      if (typeof data.draft !== "boolean") {
        throw new TypeError(`${path.basename(filePath)} needs a boolean draft field.`);
      }

      const metadata = {
        slug: path.basename(filePath, ".mdx"),
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        tags: data.tags,
        draft: data.draft,
      };

      return `export default ${JSON.stringify(metadata)};`;
    },
  };
}

function blogMdxPlugin(): Plugin {
  const plugin = mdx({
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, { defaultLang: { block: "text" }, keepBackground: false, theme: "github-dark-dimmed" }],
    ],
  });

  return {
    ...plugin,
    enforce: "pre",
    async transform(code, id) {
      if (id.includes(blogMetadataQuery)) {
        return null;
      }

      return plugin.transform(code, id);
    },
  } as Plugin;
}

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    blogMetadataPlugin(),
    blogMdxPlugin(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        crawlLinks: true,
        failOnError: true,
        filter: ({ path }) => !path.includes("#"),
        retryCount: 2,
        retryDelay: 500,
      },
    }),
    react({ include: /\.(jsx|js|mdx|tsx|ts)$/ }),
  ],
});
