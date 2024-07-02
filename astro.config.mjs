import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://helmisatria.com",
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) => page !== "https://helmisatria.com/belajar/" && page !== "https://helmisatria.com/_image/",
    }),
  ],
  redirects: {
    "/Belajar": "/belajar",
  },
  output: "static",
});
