import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://helmisatria.com",
  experimental: {
    redirects: true,
  },
  integrations: [
    tailwind(),
    mdx({
      shikiConfig: {
        theme: "github-dark",
      },
    }),
    react(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap({
      filter: (page) => page !== "https://helmisatria.com/belajar/" && page !== "https://helmisatria.com/_image/",
    }),
  ],
  redirects: {
    "/Belajar": "/belajar",
  },
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
