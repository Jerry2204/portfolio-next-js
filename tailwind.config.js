const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Poppins", "ui-sans-serif", "system-ui"],
        serif: ["Pacifico", "ui-serif", "Georgia"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        skill: "#F1F1FF",
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
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/assets/Hero.png)",
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
