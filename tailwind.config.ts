import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#030712",
        panel: "rgba(11, 21, 38, 0.62)",
        line: "rgba(148, 163, 184, 0.18)",
        cyan: "#46dfff",
        glow: "#149cff",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(70, 223, 255, 0.22), 0 0 40px rgba(20, 156, 255, 0.18)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        pulseSoft: "pulseSoft 8s ease-in-out infinite",
        drift: "drift 16s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(10px, -12px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-space)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
