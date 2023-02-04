import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      shikiConfig: {
        theme: "github-light",
      },
    }),
    react(),
  ],
  output: "server",
  adapter: cloudflare(),
});
