const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [ "./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      card: "#78716c1a",
      primary: "#7e22ce",
      secondary: "#ffa500",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
