import { writeFile } from "node:fs/promises";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  throw new TypeError('Pass a title, for example: pnpm blog:new "My new article"');
}

const slug = title
  .normalize("NFKD")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

if (!slug) {
  throw new TypeError("The title needs at least one letter or number.");
}

const today = new Intl.DateTimeFormat("en-CA", {
  day: "2-digit",
  month: "2-digit",
  timeZone: "Asia/Jakarta",
  year: "numeric",
}).format(new Date());

const content = `---
title: ${JSON.stringify(title)}
description: "TODO: Add a short description."
publishedAt: ${JSON.stringify(today)}
updatedAt: ${JSON.stringify(today)}
tags:
  - "software"
draft: true
---

Start writing here.
`;

const articlePath = new URL(`../src/content/blog/${slug}.mdx`, import.meta.url);
await writeFile(articlePath, content, { flag: "wx" });

console.log(`Created src/content/blog/${slug}.mdx`);
