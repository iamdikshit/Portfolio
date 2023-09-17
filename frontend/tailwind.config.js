/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "regal-blue": "#243c5a",
        textGradient:
          "linear-gradient(180deg, rgba(117,4,215,1) 0%, rgba(91,26,170,1) 1%, rgba(125,36,220,1) 31%, rgba(87,90,231,1) 52%, rgba(0,212,255,1) 100%);",
      },
    },
  },
  plugins: [],
};
