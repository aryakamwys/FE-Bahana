/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#003E22',
        neutral: '#FFFFFF',
        black1: '#000000',
        black2: '#1D1D1D',
        black3: '#282828',
        white: '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': '32px',
        'h2': '28px',
        'h3': '24px',
        'h4': '22px',
        'h5': '20px',
        'body': '16px',
      },
      lineHeight: {
        'h1': '40px',
        'h2': '36px',
        'h3': '32px',
        'h4': '30px',
        'h5': '28px',
        'body': '22px',
      },
    },
  },
  plugins: [],
}