const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "avid-main-500": "#00111C",
        "avid-main-400": "#0d1d28",
        "avid-accent": "#0A5FF9",
        "avid-gray-400": "#334149",
        "avid-gray-300": "#94A6B7",
        "avid-gray-200": "#203243",
      },
      backgroundImage: {
        "avid-gradient":
          "linear-gradient(116.23deg, #E23CFF 0%, #0A5FF9 101.42%)",
      },
    },
  },
  plugins: [nextui()],
};
