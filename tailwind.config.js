/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  important: false,
  content: ['./src/**/*.{html,js,jsx,ts,tsx,mdx}'],
  presets: [require('./src/styles/merkle.preset.js')],
  safelist: [
    {
      pattern: /bg-(.*)/,
      // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /font-(.*)/,
      // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /text-(.*)/,
      // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /(p|px|py|pl|pr|pt|pb)-(.*)/,
      // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /(m|mx|my|ml|mr|mt|mb)-(.*)/,
      // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
};
