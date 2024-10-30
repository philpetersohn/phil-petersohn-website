// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      blue: {
        100: "#F2F4FF",
        200: "#B9C9FE",
        300: "#7EA1F9",
        400: "#427CEB",
        500: "#0C5ACF",
        600: "#044EA4",
        700: "#01407A",
        800: "#002E50",
        900: "#001826",
      },
    },
    extend: {},
  },
  plugins: [],
};
