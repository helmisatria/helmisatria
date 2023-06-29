import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx({
    shikiConfig: {
      theme: "github-dark"
    }
  }), react(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  output: "server",
  adapter: vercel()
});