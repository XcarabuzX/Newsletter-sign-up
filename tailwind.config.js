/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary-tomato':'hsl(4, 100%, 67%)',
      'secondary-tomato':'hsl(26,97%,63%,1)',
      'dark-slate-grey':'hsl(234, 29%, 20%)',
      'charcoal-grey':'hsl(235, 18%, 26%)',
      'grey':'hsl(231, 7%, 60%)',
      'white':'hsl(0, 0%, 100%)'
    },
    extend: {
      fontFamily: {
        'body': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'default': '16px',
      },
    },
  },

  plugins: [],
}