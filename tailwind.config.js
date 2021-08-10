module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          50: "#ffff109",
          100: "#fffff0",
          200: "#feffbd",
          300: "#fdff8a",
          400: "#fcff57",
          500: "#fbff24",
          600: "#e2e600",
          700: "#a5a800",
          800: "#6e7000",
          900: "#323300",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
