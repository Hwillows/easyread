/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  mode: 'jit',
  purge: [
    "./src/**/*.{html,js}"

  ],
  theme: {
    extend: {
      fontFamily: {
        louisgeorge: ["Louis George Cafe", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
}
