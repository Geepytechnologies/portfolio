/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  fontFamily: {
    mont: ["Montserrat", "sans-serif"],
    rob: ["Roboto", "sans-serif"],
    pop: ["Poppins", "sans-serif"],
  },
};
