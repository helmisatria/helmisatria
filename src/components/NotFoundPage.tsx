import { DocumentLayout } from "./DocumentLayout";

export function NotFoundPage() {
  return (
    <DocumentLayout filePath="~/helmi-satria/404.md" footerText="HTTP 404">
      <article className="page-content compact-page">
        <section aria-labelledby="not-found-heading">
          <p className="entry-label">404 · not found</p>
          <h1 id="not-found-heading">
            <span aria-hidden="true">#</span> page not found
          </h1>
          <p className="lead">The file you were looking for is not here.</p>
          <p>
            Check the address, or return to the <a href="/">homepage</a>.
          </p>
        </section>
      </article>
    </DocumentLayout>
  );
}
