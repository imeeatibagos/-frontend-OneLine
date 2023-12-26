/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#4B6228",
        red: "#FF6868",
        secondary: "#555",
        primary: "#FCFCFC",
      },
    },
  },
  plugins: [require("daisyui")],
};
