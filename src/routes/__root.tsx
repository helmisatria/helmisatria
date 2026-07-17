import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PostHog } from "#/components/PostHog";
import { NotFoundPage } from "#/components/NotFoundPage";
import appCss from "../styles.css?url";

const themeScript = `(() => {
  try {
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {}
})();`;

const fontScript = `(() => {
  if (!document.fonts) return;

  const root = document.documentElement;
  root.classList.add("fonts-loading");

  Promise.all([
    document.fonts.load('400 1em "Geist"'),
    document.fonts.load('400 1em "Geist Mono"'),
    document.fonts.load('400 1em "Geist Pixel"'),
  ]).finally(() => root.classList.remove("fonts-loading"));
})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f7f6f2" },
    ],
    links: [
      {
        rel: "preload",
        href: "/fonts/geist/Geist.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/geist/GeistMono.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/geist/GeistPixel-Square.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "sitemap", href: "/sitemap-index.xml" },
    ],
  }),
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: fontScript }} />
      </head>
      <body>
        {children}
        <PostHog />
        <Scripts />
      </body>
    </html>
  );
}
