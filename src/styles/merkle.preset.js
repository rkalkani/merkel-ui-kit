/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // colors,
  theme: {
    extend: {
      borderRadius: {
        none: '0',
        full: '9999px',
      },
      lineHeight: {
        default: '1.4',
      },
      zIndex: {
        99: '99',
        999: '999',
        9999: '9999',
        max: '99999',
      },
    },
    fontSize: {
      '3xs': ['0.625rem'],
      '2xs': ['0.688rem'],
      xs: ['0.75rem'],
      sm: ['0.875rem'],
      base: ['16px'],
      lg: ['1.125rem'],
      xl: ['1.5rem'],
      '4xl': ['2.25rem'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
      inter: ['Inter'], // used for body fonts
      ibmplex: ['IBM Plex Mono'], // used for showing addresses and similar stuff
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
};
