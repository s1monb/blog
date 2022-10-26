/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["system-ui", "sans-serif"],
            mono: ["monospace"],
        },
        container: {
            center: true,
            screens: {
                sm: "620px",
                md: "750px",
                lg: "920px",
            },
        },
        extend: {
            colors: {
                primary: "teal",
                secondary: "#f9ffed",
                darkPrimary: "#faba44",
                darkSecondary: "black",
            },
        },
    },
    plugins: [],
};

// Mobil i klassen?
// Oppgaver?
