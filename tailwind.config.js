/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // enable dark mode using a class
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#3b82f6", // blue-500
                    dark: "#00000",  // blue-700
                },
                secondary: {
                    light: "#f59e0b", // amber-500
                    dark: "#b45309",  // amber-700
                },
                neutral: {
                    light: "#f9fafb", // gray-50
                    dark: "#111827",  // gray-900
                },
            },
        },
    },
    plugins: [],
};
