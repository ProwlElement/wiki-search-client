/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", 
  ],
  theme: {
    extend: {
      colors: {
        dark: '#363636',
        grey: '#626362',
        light: '#B9B9B9', 
        white: '#D9D9D9', 
      },
    },
  },
  plugins: [typography, scrollbar],
}
