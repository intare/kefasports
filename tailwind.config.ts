import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#212529",
          secondary: "#6C757D",
          lightGray: "#ADB5BD",
          lighterGray: "#DEE2E6",
          offWhite: "#F8F9FA",
          white: "#FFFFFF",
          accent: "#17A2B8", // Chosen accent color
        },
      },
      // Add custom fonts here if needed later
      // fontFamily: {
      //   sans: ["Inter", "sans-serif"], // Example
      // },
    },
  },
  plugins: [],
};
export default config;
