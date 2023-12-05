/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inconsolata", "monospace"],
      },
      colors: {
        "default-text": "#2F3C7E",
        "default-bg": "#FBEAEB",
        "default-card-bg": "#E2F0CB",
      },
    },
  },
  plugins: [],
};
