/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#FE880F',
          secondary:'#AF5901',
          footer:'#CCB691',
          slideOne:'#2F2F2F',
          slideTwo:'#50482B',
          slideThree:'#27695C',
          topColor:'#F2F8F2'
      },
    },
  },
  plugins: [],
};
