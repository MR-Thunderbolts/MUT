import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-coral": "#FF8577",
        "brand-cream": "#FFF9F2",
        "brand-dark": "#393939",
        "brand-gray": "#E5E5E5",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "soft": "0 10px 30px -5px rgba(57, 57, 57, 0.2)",
      },
      spacing: {
        "18": "4.5rem", // 72px
        "22": "5.5rem", // 88px
      },
    },
  },
  plugins: [],
};
export default config;
