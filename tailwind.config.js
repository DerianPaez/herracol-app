/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#091254",
        primaryDark: "#20166e",
        primaryLight: "#100d28",
        secundaryDark: "#797979",
        secundaryLight: "#C4C4C4",
        accent: "#E8DC00",
        link: "#1101A6",
        white: "#FFFFFF",
        black: "#222931",
        error: "#FF5252",
        modalBackground: "rgba(0, 0, 0, 0.3)",
        whatsapp: "#25D366",
        ok: "#47C9A2",
        skeleton: "#E3E3E3",
      },
      gridTemplateColumns: {
        header: "max-content max-content",
        banner: "1.5fr 1fr",
        contact: "1fr max-content",
        contactInfo: "250px 1fr",
        products: "repeat(auto-fill, minmax(215px, 1fr))",
        productsCategory: "265px 1fr",
        productsFilters: "max-content max-content 1fr",
        productsFiltersMd: "max-content 1fr",
        modalProductFeatures: "max-content max-content",
        modalContentContainer: "300px 1fr",
      },
      gridTemplateRows: {
        footer: "min-content min-content",
        productsCard: "250px 1fr",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("flowbite/plugin")],
};
