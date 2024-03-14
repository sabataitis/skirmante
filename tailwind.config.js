const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      card: "#78716c1a",
      primary: "#7e22ce",
      secondary: "#ffa500",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
