#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const resolveConfig = require('tailwindcss/resolveConfig');
const path = require('path');
// bring in the Tailwind config
const tailwindConfig = require('../tailwind.config.js');

const { theme: originalTheme } = resolveConfig(tailwindConfig);
const theme = {};
const keysToKeep = [
  'colors',
  'columns',
  'spacing',
  'screens',
  'boxShadow',
  'divideWidth',
  'dropShadow',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'textColor',
  'zIndex',
  'translate',
];

// Remove unwanted items
for (const key in originalTheme) {
  if (Object.hasOwnProperty.call(originalTheme, key)) {
    if (keysToKeep.includes(key)) {
      theme[key] = originalTheme[key];
    }
  }
}

const themeStr = JSON.stringify(theme);
const js = `
const theme  = ${themeStr}

export default theme
`;

try {
  // write the file to src/theme.js after
  // having prettier format the string for us
  fs.writeFileSync(
    path.resolve(process.cwd(), './src/stories/tailwind.js'),
    js,
    'utf-8',
  );
} catch (err) {
  // uh-oh, something happened here!
  console.error(err.message, err.stack);
}
