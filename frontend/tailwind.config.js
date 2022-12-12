/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      xxs: '320px',
      // => @media (min-width: 568px) { ... }

      xsm: '667px',
      // => @media (min-width: 667px) { ... }

      sm: '800px',
      // => @media (min-width: 850px) { ... }

      md: '1024px',
      // => @media (min-width: 1024px) { ... }

      lg: '1440px',
      // => @media (min-width: 1440px) { ... }

      xl: '1680px',
      // => @media (min-width: 1680px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }

      '3xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['emerald'],
  },
};
