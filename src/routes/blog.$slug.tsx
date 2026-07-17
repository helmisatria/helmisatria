import { createFileRoute, notFound } from "@tanstack/react-router";
import { Suspense } from "react";
import { BlogArticle, blogMdxComponents } from "#/components/BlogArticle";
import { DocumentLayout } from "#/components/DocumentLayout";
import { getBlogPost, getBlogPostContent, preloadBlogPostContent } from "#/lib/posts";
import { createSeoHead } from "#/lib/seo";

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = getBlogPost(params.slug);

    if (!post) {
      throw notFound();
    }

    await preloadBlogPostContent(post.slug);
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {};
    }

    return createSeoHead({
      title: loaderData.title,
      description: loaderData.description,
      path: `/blog/${loaderData.slug}/`,
      type: "article",
      publishedAt: loaderData.publishedAt,
    });
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const BlogPostContent = getBlogPostContent(post.slug);

  if (!BlogPostContent) {
    throw new Error(`The article content for ${post.slug} is missing.`);
  }

  return (
    <DocumentLayout filePath={`~/helmi-satria/blog/${post.slug}.mdx`} footerText={`Last updated ${post.updatedAt}.`}>
      <article className="page-content blog-post-page">
        <header className="blog-post-header">
          <a className="back-link" href="/blog/">
            ← Back to blog
          </a>
          <div className="blog-post-meta">
            <p className="entry-label">{post.tags.join(" · ")} · article</p>
            <p className="blog-post-date">
              Updated <time dateTime={post.updatedAt}>{dateFormatter.format(new Date(post.updatedAt))}</time>
            </p>
          </div>
          <h1>
            <span aria-hidden="true">#</span> {post.title}
          </h1>
        </header>
        <Suspense fallback={<p className="blog-post-loading">Loading article…</p>}>
          <BlogArticle>
            <BlogPostContent components={blogMdxComponents} />
          </BlogArticle>
        </Suspense>
      </article>
    </DocumentLayout>
  );
}
