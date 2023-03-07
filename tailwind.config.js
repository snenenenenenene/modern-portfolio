/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      fontFamily: {
        display: ["DugasPro"],
        bold: ["DugasProBold"],
        body: ["HelveticaNeue"],
      },
      colors: {
        darkMode: "class",
        light: {
          primary: "#FFF6F0",
          secondary: "#262523",
          tertiary: "#c4c4c4",
          text: "#FFFFFF",
          accent: "#4444a0",
        },
        dark: {
          primary: "#262523",
          secondary: "#FFF6F0",
          tertiary: "#BF9B30",
          text: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
