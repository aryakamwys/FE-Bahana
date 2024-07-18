/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005E32",
        primary50: "#E6ECE9",
        primary100:"#B0C3BA",
        primary200:"#8AA699",
        primary300:"#547E6B",
        primary400:"#33654E",
        primary500:"#003E22",
        primary600:"#00381F",
        primary700:"#002C18",
        primary800:"#002213",
        primary900:"#001A0E",
        neutral: "#FFFFFF",
        black1: "#000000",
        black2: "#1D1D1D",
        black3: "#282828",
        gray: "#5D5D5D",
        white: "#FFFFFF",
        greenLight: "#D9E8E1",
        yellow: '#FFAC33',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: "32px",
        h2: "28px",
        h3: "24px",
        h4: "22px",
        h5: "20px",
        body: "16px",
      },
      lineHeight: {
        h1: "40px",
        h2: "36px",
        h3: "32px",
        h4: "30px",
        h5: "28px",
        body: "22px",
      },
      spacing: {
        2: "8px",
        4: "16px",
        6: "24px",
        8: "32px",
        10: "40px",
        14: "56px",
        18: "72px",
        20: "80px",
        24: "96px",
        30: "120px",
      },
    },
  },
  plugins: [],
};
