/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'data-theme',
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}