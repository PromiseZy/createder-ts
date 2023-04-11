/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      padding: {
        '26px': '26px',
      },
      width: {
        '227px': '227px',
        '290px': '290px',
      },
      height: {
        '54px': '54px',
      },
      borderRadius: {
        'large': '7px',
      },
      space: {
        '26px': '26px',
      },
      backgroundSize: {
        '50%': '50%',
        '16': '4rem',
      }
    },
  },
  plugins: [],
}
