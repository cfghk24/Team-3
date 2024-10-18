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
        primary: "#F3F0EA",
        secondary: "#202e5d",
        secondary_light: "#1C3E78",
        third: "#5965a2",
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
