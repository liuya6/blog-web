import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    boxSizing: true, // 确保启用 (默认值)
  },
  theme: {
    extend: {
      height: {
        nav: "60px", // 自定义高度
      },
      maxWidth: {
        content: "1170px", // 使用自定义名称
      },
      spacing: {
        "content-px": "4vw", // 动态边距
      },
      boxShadow: {
        "card-box-shadow": "var(--card-box-shadow)",
        "card-hover-shadow": "var(--card-hover-shadow)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "header-nav-sub-in": {
          "0%": { transform: "translateY(5px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shake: {
          "0%": {
            transform: "rotate(-15deg)",
          },
          "4%": {
            transform: "rotate(15deg)",
          },
          "8%, 24%": {
            transform: "rotate(-18deg)",
          },
          "12%, 28%": {
            transform: "rotate(18deg)",
          },
          "16%": {
            transform: "rotate(-22deg)",
          },
          "20%": {
            transform: "rotate(22deg)",
          },
          "32%": {
            transform: "rotate(-12deg)",
          },
          "36%": {
            transform: "rotate(12deg)",
          },
          "40%, 100%": {
            transform: "rotate(0deg)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0.5",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "header-nav-sub-in": "header-nav-sub-in 0.25s ease-out",
        "notices-shake": "shake 1s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out forwards",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
