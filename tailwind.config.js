/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepMaroon: "#740938",
        darkRed: "#AF1740",
        mediumRed: "#CC2B52",
        lightRed: "#DE7C7D",
      },
    },
  },
  plugins: [],
};
