import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '6.5': '1.625rem', // 6.5 x 4px = 26px
      },
      colors: {
        primary: "#F3F0EA",
        secondary: "#051c2c",
        secondary_light: "#1C3E78",
        third: "#7D6256",
        fourth: "#044F67",
        bg_secondary: "#EFEDE5",
        main_black: "#1B1B1B",
        text_color: "#A5A5A5",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
  },
  plugins: [
  ],
};

export default config;
