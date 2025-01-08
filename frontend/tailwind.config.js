/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
      'custom-light': `4px 4px 10px
                       rgba(0, 0, 0, 0.1)`,
      'custom-dark': `6px 6px 15px
                      rgba(0, 0, 0, 0.3)`,
      'custom-color': `5px 5px 20px
                       rgba(34, 60, 80, 0.7)`,
  },},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}