/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        montaga: ["montagna", "serif"], 
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#EFEFEA",
      },
    },
  },


  
  plugins: [],
};