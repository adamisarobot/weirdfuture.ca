/** @type {import('tailwindcss').Config} */
const FormKitVariants = require('@formkit/themes/tailwindcss');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Comic Sans MS', 'Comic Sans', 'cursive']
      },
      boxShadow: {
        panel: '0 6px 6px -6px #000'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [FormKitVariants]
};
