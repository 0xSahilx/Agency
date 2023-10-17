/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'darker-grotesque': ['Darker Grotesque', 'sans'], 
      },
    },
  },
  plugins: [],
}