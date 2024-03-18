module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: { blue_gray: { 900: "#1c274c" }, white: { A700: "#ffffff" } },
      boxShadow: { xs: "0px 4.77px  9px -3.58px #0000000f", sm: "0px 1.21px  2px 0px #a6afc33f" },
      fontFamily: { euclidcirculara: "Euclid Circular A" },
      backgroundImage: { gradient: "linear-gradient(180deg, #f3f4f6,#b9d0ff00)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
