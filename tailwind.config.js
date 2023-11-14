/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customPrimary: "#0B1938",
        customSecondary: "#244C84",
        customTertiary: "#2596BE",
        customWhite: "#E8E9ED",
        customGray: "#4E596E",
      },
    },
  },
  plugins: [],
};
