/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily:{
        lobster:["Lobster","cursive "],
        abel:["Abel", "sans-serif"]
      },
    },
   
  },
   variants: {
      extend: {
        backgroundColor: ['active'],
      }
    },
  plugins: [],
}