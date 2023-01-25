/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#26272B",
        "light-accent": "#9E91ED",
        "dark-accent": "#614DE2",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Jost", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
