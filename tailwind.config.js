const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flyonui/dist/js/*.js',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flyonui'),
    require('flyonui/plugin'),
    require('daisyui'),
    flowbite.plugin()
  ],
}

