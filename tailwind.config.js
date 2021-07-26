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
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
