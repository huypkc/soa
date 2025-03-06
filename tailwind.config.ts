import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange1: "#F2542D",
        orange2: "#CA3E1B",
        orange3: "#FFF4F1",
        brown: "#562C2C",
        blue: "#0E9594",
        blue2: "#1E88F9",
        gray: "#BBBBBB",
        gray2: "#DFDFDF",
        gray3: "#F5F5F5",
        gray4: "#CCCCCC",
        gray5: "#D7D7D7",
        gray6: "#AAAAAA",
        gray7: "#999999",
        shadow: "#F2542D",
      },
      screens: {
        bp: "1120px",
      },
      animation: {
        "grow-circle": "growCircle 1s ease-in-out forwards", // Tên animation
      },
      keyframes: {
        growCircle: {
          "0%": {
            transform: "scale(1)", // Kích thước ban đầu
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(50)", // To dần (50x kích thước ban đầu)
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        "text-shadow": (value) => ({
          textShadow: value,
        }),
      });
      matchUtilities({
        "hover-scale": (value) => ({
          transition: "all",
          transitionDuration: "500ms",
          "&:hover": {
            transform: `scale(${value})`,
          },
        }),
      });
    }),
  ],
} satisfies Config;
