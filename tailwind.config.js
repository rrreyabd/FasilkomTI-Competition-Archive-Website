/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        public: ["Public Sans", "sans-serif"],
      },
      colors: {
        customWhite: "#f5f5f5",
        purple: "#6941c6",
        lightPurple: "#f9f5ff",
      }
    },
  },
  plugins: [],
};
