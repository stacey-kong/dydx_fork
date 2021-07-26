module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
