/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      content: [
        `Haskoy, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol"`,
      ],
      code: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
    },
    extend: {
      screens: {
        mini: "484px",
        mob: "420px",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.05em",
      },
      lineHeight: {
        100: "100%",
        120: "120%",
        140: "140%",
        150: "150%",
      },
      colors: {
        blog: {
          light: "#FDF9F6",
          "dark-main": "#1E0B01",
          "dark-secondary": "#A75D25",
        },
        dark: "#051C29",
        cyan: {
          dark: "#093853",
        },
        green: {
          light: "#40F4B2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")],
};
