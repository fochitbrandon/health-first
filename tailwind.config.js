/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "red",
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-full , minmax(200px, 1fr)'
      }
    },
  },
  plugins: [],
};
