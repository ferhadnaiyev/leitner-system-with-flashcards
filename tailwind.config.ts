import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "var(--yellow)"
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
} satisfies Config;
