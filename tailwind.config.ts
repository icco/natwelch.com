import type { Config } from "tailwindcss"

const config: Config = {
  future: {},
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("daisyui/src/theming/themes")["nord"],
        },
        dark: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          "color-scheme": "dark",
          primary: "#3B4252",
          secondary: "#434C5E",
          accent: "#81A1C1",
          neutral: "#4C566A",
          "base-content": "#eceff4",
          "base-100": "#2E3440",
          info: "#5E81AC",
          success: "#A3BE8C",
          warning: "#D08770",
          error: "#BF616A",
          "--rounded-box": "0.4rem",
          "--rounded-btn": "0.2rem",
          "--rounded-badge": "0.4rem",
          "--tab-radius": "0.2rem",
        },
      },
    ],
    logs: false,
  },
}
export default config
