# helmisatria.com

Helmi Satria’s personal website and blog, built with TanStack Start and React.

The site uses a document-inspired visual system based on the approved markdown portfolio prototype. Blog articles are MDX files stored in `src/content/blog`, so publishing the site does not depend on Contentful or another CMS.

## Local development

Use Node.js 22 and pnpm through Corepack:

```bash
corepack pnpm install
corepack pnpm dev
```

The development server runs on `http://localhost:3000`.

## Checks

```bash
corepack pnpm typecheck
corepack pnpm build
```

The production build regenerates the sitemap, then prerenders the homepage, blog index, and every linked blog article.

## Deployment

The project is configured for Cloudflare Workers:

```bash
corepack pnpm deploy
```

Before the first deployment, connect the existing `helmisatria.com` domain to the Worker. The repository does not change DNS or deploy automatically.

## Content and analytics

- The original 11 blog articles keep their existing `/blog/<slug>` URLs.
- `/belajar` and the legacy `/Belajar` URL remain available.
- The blog index, article count, routes, and sitemap are generated from each article's frontmatter.
- PostHog is the only analytics integration. It loads after the main page becomes idle.

## Writing a blog post

Create a draft with:

```bash
corepack pnpm blog:new "My article title"
```

This creates `src/content/blog/my-article-title.mdx`. Fill in the description, dates, and tags in the frontmatter, then write the article with Markdown below it. Set `draft: false` when it is ready to publish. Drafts are visible locally and excluded from production builds and the sitemap.
