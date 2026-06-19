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
        brand: {
          dark: "#2C1A0E",
          brown: "#3D2210",
          gold: "#B8860B",
          amber: "#C9A227",
          light: "#F5EFE6",
          cream: "#FAF7F2",
          muted: "#8B6914",
        },
      },
      fontFamily: {
        arabic: ["Cairo", "Noto Sans Arabic", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
