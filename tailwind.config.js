/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./App.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      primary: "#2b93b4",
      secondary: "#56aaa6",
      variant01: "#2791b5",
      variant02: "#5f78b9",
    },
  },
  plugins: [],
};
