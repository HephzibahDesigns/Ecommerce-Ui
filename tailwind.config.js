/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-bg": "#292929",
        card: "#4D4D4F",
      },
    },
  },
  plugins: [],
};
