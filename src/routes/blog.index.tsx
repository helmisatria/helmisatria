import { DocumentLayout } from "#/components/DocumentLayout";
import { blogPosts } from "#/lib/posts";
import { createSeoHead } from "#/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export const Route = createFileRoute("/blog/")({
  head: () =>
    createSeoHead({
      title: "Blog — Helmi Satria",
      description: "Notes and practical guides from Helmi Satria about software, data, and building useful tools.",
      path: "/blog/",
    }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <DocumentLayout filePath="~/helmi-satria/blog/README.md">
      <article className="page-content blog-index">
        <section className="intro" aria-labelledby="blog-heading">
          <p className="entry-label">{blogPosts.length} published notes</p>
          <h1 id="blog-heading">
            <span aria-hidden="true">#</span> blog
          </h1>
          <p className="lead">Practical notes from things I built, tested, or had to figure out.</p>
          <p>Mostly software and data tutorials.</p>
        </section>

        <hr />

        <section aria-labelledby="articles-heading">
          <h2 className="visually-hidden" id="articles-heading">
            Articles
          </h2>
          <ol className="post-list">
            {blogPosts.map((post) => (
              <li className="post-list-item" key={post.slug}>
                <article>
                  <div className="post-meta">
                    <span>{post.tags.join(" · ")}</span>
                    <time dateTime={post.updatedAt}>{dateFormatter.format(new Date(post.updatedAt))}</time>
                  </div>
                  <h2>
                    <a href={`/blog/${post.slug}/`}>{post.title}</a>
                  </h2>
                  <p>{post.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </DocumentLayout>
  );
}
