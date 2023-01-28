/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#26272B",
        "dark-background": "#1e1e20",
        "light-accent": "#9E91ED",
        "dark-accent": "#614DE2",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Jost", "serif"],
      },
    },
    screens: {
        ...defaultTheme.screens,
        xsm: "380px",
        mdd: "843px",
        lgg: "1237px",
        xl: "1633px",
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
