/* eslint-env node */

function quoteWrapped(filenames) {
  return filenames.map((f) => `'${f}'`).join(' ');
}

module.exports = {
  '*.{js,jsx,ts,tsx,json,css,scss,md}': (filenames) =>
    `prettier --write ${quoteWrapped(filenames)}`,

  // '**/*.ts?(x)': (filenames) => `vue-tsc --noEmit --pretty ${quoteWrapped(filenames)}`,

  // '*.{js,ts,vue,jsx,tsx,cjs,mjs,mdx}': (filenames) => `npm run eslint -- ${quoteWrapped(filenames)}`,
};
