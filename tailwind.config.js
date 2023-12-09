const xColors = {
  xblack: {
    100: "#721346",
    200: "#b865dc",
    300: "#b765dd",
    400: "#be66d6",
    500: "#a21ab8",
    600: "#0000",
    700: "#f6f6fc",
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...xColors,
      },
    },
  },
  plugins: [],
};
