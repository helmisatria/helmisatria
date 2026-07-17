import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { DocumentLayout } from "#/components/DocumentLayout";

const telegramUrl = "https://t.me/+pFsFY9oqWUg1MTM9";

export const Route = createFileRoute("/belajar")({
  head: () => ({
    meta: [
      { title: "Belajar Bareng Helmi" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: BelajarPage,
});

function BelajarPage() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.assign(telegramUrl);
    }, 3_000);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <DocumentLayout filePath="~/helmi-satria/belajar.md" footerText="Redirecting to Telegram">
      <article className="page-content compact-page">
        <section>
          <p className="entry-label">external link · telegram</p>
          <h1>
            <span aria-hidden="true">#</span> belajar bareng helmi
          </h1>
          <p className="lead">Bentar ya, otw ke Telegram group…</p>
          <p>
            If nothing happens, <a href={telegramUrl}>open the group directly</a>.
          </p>
        </section>
      </article>
    </DocumentLayout>
  );
}
