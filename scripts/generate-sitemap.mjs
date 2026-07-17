import { readFile, readdir, writeFile } from "node:fs/promises";
import matter from "gray-matter";

const siteUrl = "https://helmisatria.com";
const blogDirectory = new URL("../src/content/blog/", import.meta.url);
const sitemapIndexPath = new URL("../public/sitemap-index.xml", import.meta.url);
const sitemapPath = new URL("../public/sitemap-0.xml", import.meta.url);

const articleFiles = (await readdir(blogDirectory)).filter((name) => name.endsWith(".mdx"));
const posts = await Promise.all(
  articleFiles.map(async (name) => {
    const { data } = matter(await readFile(new URL(name, blogDirectory), "utf8"));

    if (typeof data.updatedAt !== "string" || typeof data.draft !== "boolean") {
      throw new TypeError(`${name} needs updatedAt and draft frontmatter fields.`);
    }

    return {
      slug: name.replace(/\.mdx$/, ""),
      updatedAt: data.updatedAt,
      draft: data.draft,
    };
  }),
);

const staticUrls = ["/", "/blog/"];
const postUrls = posts
  .filter((post) => !post.draft)
  .map((post) => {
    return {
      path: `/blog/${post.slug}/`,
      lastModified: post.updatedAt,
    };
  })
  .sort((first, second) => first.path.localeCompare(second.path));

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${siteUrl}/sitemap-0.xml</loc></sitemap>
</sitemapindex>
`;

const sitemapEntries = [
  ...staticUrls.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`),
  ...postUrls.map(
    ({ path, lastModified }) =>
      `  <url><loc>${siteUrl}${path}</loc><lastmod>${lastModified}</lastmod></url>`,
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join("\n")}
</urlset>
`;

await Promise.all([
  writeFile(sitemapIndexPath, sitemapIndex),
  writeFile(sitemapPath, sitemap),
]);

console.log(`Generated sitemap with ${sitemapEntries.length} URLs.`);
