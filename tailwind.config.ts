import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Surface-Secondary": "#EEEEEE",
        "cta-stroke-primary": "#3B3B3B",
        "cta-stroke-secondary": "#3B3B3B",
        "cta-fill-primary": "#585660",
        "item-fill": "#3B3B3B",
        "stroke-tertiary": "#EFEDF3",
        "gray-medium": "#3B3B3B",
      },
      width: {
        "card": "23.75rem",
        "thumbnail": "20.75rem"
      },
      height: {
        "card": "27.25rem",
        "thumbnail": "15rem"
      },
    },
  },
  plugins: [],
};
export default config;
