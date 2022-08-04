import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import nodeExternals from 'rollup-plugin-node-externals';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
// import alias, { Alias } from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
// import visualizer from 'rollup-plugin-visualizer';
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
// import postcssModules from 'postcss-modules';

const packageJson = require('./package.json');

const plugins = [
  commonjs({
    include: 'node_modules/**',
  }),
  nodeExternals(),
  resolve(),
  esbuild({
    minify: false,
    sourceMap: true,
    tsconfig: 'tsconfig.json',
    platform: 'browser',
  }),
  postcss(),
  json(),
  // alias({ entries: [] }),
  replace({ preventAssignment: true }),
];

const basePath = 'dist'

const externals = [
  '@emotion/server/create-instance',
  'dayjs/locale/ru',
  '@emotion/cache',
  '@emotion/utils',
  '@emotion/serialize',
  'react-proptypes',
  ...Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.dependencies,
  }),
];

export default [{
  input: 'src/index.ts',
  output: [
    {
      name: packageJson.name,
      // file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      dir: path.join(basePath, 'cjs'),
      preserveModules: true,
      exports: 'named',
      externalLiveBindings: false,
    },
    {
      name: packageJson.name,
      // file: packageJson.module,
      format: "esm",
      sourcemap: true,
      dir: path.join(basePath, 'esm'),
      preserveModules: true,
      externalLiveBindings: false,
    },
  ],
  plugins,
  external: externals
}, {
    input: path.join(basePath, 'esm/types/index.d.ts'),
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|scss|sass|less)$/],
}]
