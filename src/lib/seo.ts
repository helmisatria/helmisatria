const siteUrl = "https://helmisatria.com";
const socialImageUrl = `${siteUrl}/images/og.png`;

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  type?: "article" | "website";
  publishedAt?: string;
};

export function createSeoHead({
  title,
  description,
  path,
  type = "website",
  publishedAt,
}: SeoOptions) {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const meta = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: socialImageUrl },
    { property: "og:image:alt", content: "Helmi Satria" },
    { property: "og:site_name", content: "Helmi Satria" },
    { property: "og:locale", content: "id_ID" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@helmisatria_" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: socialImageUrl },
  ];

  if (publishedAt) {
    meta.push({ property: "article:published_time", content: publishedAt });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
