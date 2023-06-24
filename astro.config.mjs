import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      shikiConfig: {
        theme: "github-dark",
      },
    }),
    react(),
  ],
  output: "server",
  adapter: cloudflare(),
});
