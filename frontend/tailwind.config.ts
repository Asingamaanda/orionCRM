import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        panel: "#121A2B",
        soft: "#1A2538",
        accent: "#8B5CF6",
        text: "#E2E8F0"
      }
    }
  },
  plugins: []
};

export default config;
