/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        accent: "#22D3EE",
        background: "#0B0F19",
      },
    },
  },
  plugins: [],
}