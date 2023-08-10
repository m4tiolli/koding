/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cinza: "#323232",
        roxo: "#B461A9",
        roxoclaro: "#F4E5F9",
        verde: "#63D5A4",
        verdeclaro: "#E5E9F9",
        input: "#BCC2C7",
      },
      width: {
        "40vw": "40vw",
      },
      height: {
        "35vh": "35vw",
      },
    },
  },
  plugins: [],
};
