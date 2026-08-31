import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        surface: {
          DEFAULT: "#F5F5F2",
          elevated: "#FFFFFF",
          dark: "#111111",
        },
        ink: {
          DEFAULT: "#171717",
          muted: "#6E6E73",
        },
        divider: {
          DEFAULT: "#DCDCDC",
        },
        accent: {
          DEFAULT: "#2457E6",
          muted: "#A9B9D6",
        },
        green: {
          500: "#22C55E", // Tailwind default green-500
        },
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(23, 23, 23, 0.04)",
        card: "0 2px 8px rgba(23, 23, 23, 0.06), 0 1px 2px rgba(23, 23, 23, 0.04)",
        elevated:
          "0 8px 24px rgba(23, 23, 23, 0.08), 0 2px 6px rgba(23, 23, 23, 0.04)",
        "card-hover":
          "0 12px 32px rgba(23, 23, 23, 0.1), 0 4px 8px rgba(23, 23, 23, 0.04)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.2, 0.64, 1)",
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
