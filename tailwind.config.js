/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#2b8cee",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "card-light": "#ffffff",
        "card-dark": "#1A2633",
        "text-main-light": "#111418",
        "text-main-dark": "#ffffff",
        "text-sec-light": "#617589",
        "text-sec-dark": "#9BA8B6",
      },
      fontFamily: {
        "manrope": ["Manrope", "sans-serif"],
        "lexend": ["Lexend", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "full": "9999px"
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(43, 140, 238, 0.05)',
        'nav': '0 -4px 20px -5px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
