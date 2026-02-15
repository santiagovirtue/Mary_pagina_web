/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
theme: {
    extend: {
    colors: {
        cream: "#fffaf0",
        gold: "#b8860b",
    },
    },
},
plugins: [],
};
