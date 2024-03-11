/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        skinbrown: "#FAEDCD",
        darkbrown: "#D4A373",
      },
      dropShadow: {
        navShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
        buttonShadow: "0 4px rgba(212,163,115,1)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
