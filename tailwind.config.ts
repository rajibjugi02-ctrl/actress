import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF9",
          100: "#FAF7EE",
          200: "#F5F0E4",
        },
        pastel: {
          pink: "#FFD6E0",
          "pink-deep": "#F78DA7",
          blush: "#FFB3C6",
          yellow: "#FFF3B0",
          "yellow-deep": "#FFE483",
          lavender: "#E8DDFB",
          "lavender-deep": "#C7B5EC",
          mint: "#D8F3DC",
          "mint-deep": "#A7D7B9",
        },
        ink: {
          dark: "#3D3A38",
          muted: "#7A726D",
          soft: "#9E958E",
        },
      },
      fontFamily: {
        title: ["var(--font-title-latin)", "var(--font-title-ko)", "serif"],
        bubble: ["var(--font-bubble-latin)", "var(--font-bubble-ko)", "cursive"],
        body: ["var(--font-body-latin)", "var(--font-body-ko)", "sans-serif"],
        hand: ["var(--font-hand-latin)", "var(--font-hand-ko)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
