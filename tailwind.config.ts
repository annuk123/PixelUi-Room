
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  animation: {
    gradient: "gradientMove 15s ease infinite",
  },
  keyframes: {
    gradientMove: {
      "0%, 100%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
    },
  },
  backgroundSize: {
    "size-400": "400% 400%",
  },
  backgroundImage: {
    'gradient-animated': 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #0a0a23)',
  },
}
    },
    plugins: [
        
       
    ],
} satisfies Config;