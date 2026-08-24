module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/**/*.js", // Add this line
  ],
  plugins: [
    require("flyonui"), // Add FlyonUI plugin
  ],
};