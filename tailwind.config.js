/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#FF6020',
      'dark-gray': '#2F2F2F',
      'light-gray': '#F2F2F2',
      'light-back': '#FFF4EF',
      'black': 'black',
      'mid-gray': 'rgb(241 245 249)',
    },
    fontSize: {
      '26': '26px',
      '13': '13px',
      'f-36': '36px',
      'f-20': '20px'
    },
    extend: {},
  },
  plugins: [],
}

