const colors = require("tailwindcss/colors");

module.exports = {
  content: [ 
      "./pages/*.tsx",
      "./components/layout/*.tsx",
      "./components/templates/*.tsx",
      "./components/shared/components/*.tsx"
  ],
    safeList: [
        'text-left',
        'text-center',
        'text-right',
        'sm:grid-flow-col',
        'grid-flow-col',
        'sm:grid-flow-row',
        'grid-flow-row',
        'auto-cols-auto',
        'auto-cols-min',
        'auto-cols-max',
    ],
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
