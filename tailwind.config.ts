import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";
const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  // If you need to safelist classes, add them inside the content array as an object:
  // {
  //   raw: 'text-10 text-12 text-14 text-16 text-18 text-20 text-24 text-26 text-30 text-36',
  // }
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [
    animate,
    tailwindScrollbarHide,
    plugin(function ({ addUtilities }) {
      addUtilities({
        // no-scrollbar
        ".no-scrollbar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none",    // Firefox
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",              // Chrome, Safari, Opera
        },

        // glassmorphism
        ".glassmorphism": {
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        },

        // custom-scrollbar
        ".custom-scrollbar::-webkit-scrollbar": {
          width: "3px",
          height: "3px",
          "border-radius": "2px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          background: "#dddddd",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          background: "#5c5c7b",
          "border-radius": "50px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#7878a3",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
