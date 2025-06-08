/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { 50: '#2c2c2c', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'},        
        secondary: '#424050',
        accent: '#8685ef',
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
        text: {
          primary: '#fff',
          secondary: '#fff',
        },
      },
      backgroundColor: {
        primary: '#1a1a1a',
        secondary: '#2d2d2d',
        tertiary: '#3d3d3d',
      },
      borderColor: {
        primary: '#4d4d4d',
        secondary: '#5d5d5d',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
