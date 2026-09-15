import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101827",
        mist: "#f6f8fb",
        cobalt: "#5865f2",
        cyan: "#1fd1c4",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        soft: "0 16px 50px rgba(16, 24, 39, 0.08)",
        glow: "0 12px 45px rgba(88, 101, 242, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
