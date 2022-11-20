/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [    
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '6.4px',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
