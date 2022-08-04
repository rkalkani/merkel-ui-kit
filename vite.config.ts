import dts from "vite-plugin-dts";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// import commonjs from '@rollup/plugin-commonjs';
// import nodeExternals from 'rollup-plugin-node-externals';
// import nodeResolve from '@rollup/plugin-node-resolve';
// import esbuild from 'rollup-plugin-esbuild';
// import json from '@rollup/plugin-json';
// import alias, { Alias } from '@rollup/plugin-alias';
// import replace from '@rollup/plugin-replace';
// import visualizer from 'rollup-plugin-visualizer';
// import dts from "rollup-plugin-dts";
// import postcss from "rollup-plugin-postcss";
// import postcssModules from 'postcss-modules';


const packageJson = require('./package.json');

// const plugins = [
//   commonjs({
//     include: 'node_modules/**',
//   }),
//   nodeExternals(),
//   resolve(),
//   // esbuild({
//   //   minify: false,
//   //   sourceMap: true,
//   //   tsconfig: 'tsconfig.json',
//   //   platform: 'browser',
//   // }),
//   // postcss(),
//   // json(),
//   // alias({ entries: [] }),
//   replace({ preventAssignment: true }),
// ];

const externals = [
  '@emotion/server/create-instance',
  'dayjs/locale/ru',
  '@emotion/cache',
  '@emotion/utils',
  '@emotion/serialize',
  'react-proptypes',
  ...Object.keys({
    ...packageJson.peerDependencies,
    // ...packageJson.dependencies,
  }),
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  esbuild: {
    platform: 'browser',
    keepNames: true
  },
  build: {
    cssCodeSplit: false,
    lib: {
      name: packageJson.name,
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: externals,
      output: {
        // preserveModules: true,
        externalLiveBindings: false,
        sourcemap: true,
        format: 'esm',
        exports: 'named',
        esModule: true
      }
    },
  },
});
