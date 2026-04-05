/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0a",
        secondary: "#7b7b7b",
        border: "#e8e8e8",
        destructive: "#ef3737",
        accent: "#f1f1f1",
        tag: "#bbbbbb",
        primary: {
          DEFAULT: "#00af66",
          dark: "#047b43",
        },
        nav: {
          DEFAULT: "#0a0a0a",
          foreground: "#fafafa",
        },
        sidebar: "#fafafa",
      },
      boxShadow: {
        button: "0 1px 0 0 rgb(0 0 0 / 0.149)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
};
