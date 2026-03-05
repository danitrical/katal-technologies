import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        void: "#06060F",
        navy: "#0A0A1E",
        "purple-brand": "#9B30FF",
        "magenta-brand": "#E040FB",
        "purple-soft": "#C77DFF",
        "purple-dim": "#7B2FBE",
        "surface": "#0F0F24",
        "surface-2": "#13132C",
        "border-glow": "rgba(155, 48, 255, 0.3)",
      },
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #9B30FF 0deg, #E040FB 180deg, #9B30FF 360deg)",
        "brand-gradient": "linear-gradient(135deg, #9B30FF 0%, #E040FB 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(155,48,255,0.15) 0%, rgba(224,64,251,0.15) 100%)",
      },
      keyframes: {
        "float-up": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "float-up": "float-up 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
