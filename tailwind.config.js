/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    colors: {
      nord0: "#2e3440",
      nord1: "#3b4252",
      nord2: "#434c5e",
      nord3: "#4c566a",
      nord4: "#d8dee9",
      nord5: "#e5e9f0",
      nord6: "#eceff4",
      nord7: "#8fbcbb",
      nord8: "#88c0d0",
      nord9: "#81a1c1",
      nord10: "#5e81ac",
      nord11: "#bf616a",
      nord12: "#d08770",
      nord13: "#ebcb8b",
      nord14: "#a3be8c",
      nord15: "#b48ead",
      background: "#eceff4",
      text: "#2e3440",
      border: "#454e61",
      primary: "#88C0D0",
      accent: "#d8dee9",
      muted: "#394050",
      link: "#5E81AC",
    },
  },
}
