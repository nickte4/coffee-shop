/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      background: "#f5f0ea",
      primary: "#7e6242",
      secondary: "#e1d2c1",
      accent: "#8da57a",
    },
  },
  plugins: [],
};
