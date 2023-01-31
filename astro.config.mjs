import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://helmisatria.com",
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
    mdx({
      shikiConfig: {
        theme: "min-light",
      },
    }),
    image(),
  ],
  output: "server",
  adapter: cloudflare(),
});
