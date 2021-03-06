const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "361px",
      ...defaultTheme.screens,
    },
    extend: {
      width: {
        "9/10": "90%",
      },
      zIndex: {
        "-10": "-10",
      },
      colors: {
        primary: "#5c6ac4",
        secondary: "rgb(128, 126, 152)",
        number: "rgba(200,199,216)",
        red: "rgb(228, 85, 85)",
      },
      fontSize: {
        xs: "0.875rem",
        s: "1.075rem",
        sm: "1.25rem",
        m: "1.46rem",
        l: "1.845rem",
        xl: "2.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
