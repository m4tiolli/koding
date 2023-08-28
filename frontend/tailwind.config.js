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
      backgroundImage: {
        gradient1:
          "linear-gradient(180deg, #3CF55C 0%, #2BB0A1 53.13%, #1E7BD7 97.40%)",
        gradient2:
          "linear-gradient(180deg,#f09a2d 0%, #c26674 53.13%,#811bd9 97.4%)",
      },
      width: {
        "40vw": "40vw",
      },
      height: {
        "35vh": "35vw",
        "45vh": "44vw",
      },
      screens: {

        "laptop": '1440px',
        // => @media (min-width: 1440px) { ... }

        "4k": '2560px',
        // => @media (min-width: 2560px) { ... }
      },
      borderWidth: {
        '1': '1px'
      },
      spacing: {
        '18': '4.5rem'
      }
    },
  },
  plugins: [],
};
