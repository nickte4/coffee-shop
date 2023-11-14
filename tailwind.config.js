/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-from-right": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-out-from-right": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "slide-in-from-right": "slide-in-from-right 0.2s ease-in",
        "slide-out-from-right": "slide-out-from-right 0.2s ease-out",
      },
      width: {
        large: "100rem",
      },
      height: {
        large: "100rem",
      },
      colors: {
        background: "#f5f0ea",
        primary: "#7e6242",
        secondary: "#e1d2c1",
        accent: "#8da57a",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
