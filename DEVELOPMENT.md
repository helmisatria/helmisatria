# Developing helmisatria.com

Helmi Satria's personal website and blog, built with TanStack Start and React. Blog articles are MDX files in `src/content/blog`.

## Local development

Use Node.js 22 and pnpm through Corepack:

```bash
corepack pnpm install
corepack pnpm dev
```

The dev server runs on `http://localhost:3000`.

## Checks

```bash
corepack pnpm typecheck
corepack pnpm build
```

The build regenerates the sitemap and prerenders the homepage, blog index, and all blog articles.

## Deployment

Deploys to Cloudflare Workers:

```bash
corepack pnpm deploy
```

## Writing a blog post

```bash
corepack pnpm blog:new "My article title"
```

This creates `src/content/blog/my-article-title.mdx`. Fill in the frontmatter, write the article, and set `draft: false` to publish. Drafts are visible locally but excluded from production builds and the sitemap.
