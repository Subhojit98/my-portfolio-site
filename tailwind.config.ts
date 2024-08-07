import type { Config } from "tailwindcss"
// import moduleName from './app/assets/Images&Icons/gggrain-4.svg'
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage:{
        'background-left' : "url('./assets/Images&Icons/gggrain-4.svg')",
        'background-right' : "url('./assets/Images&Icons/gggrain-11.svg')",
      },
      colors: {
        smalltext: "#62427e",
        headtext:"#4831d4"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config