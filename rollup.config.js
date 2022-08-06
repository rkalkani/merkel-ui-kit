import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import nodeExternals from 'rollup-plugin-node-externals';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';
// import alias, { Alias } from '@rollup/plugin-alias';
// import visualizer from 'rollup-plugin-visualizer';
// import postcssModules from 'postcss-modules';

const plugins = [
  commonjs({
    include: 'node_modules/**',
  }),
  nodeExternals({ deps: false }),
  resolve(),
  esbuild({
    minify: false,
    sourceMap: true,
    tsconfig: 'tsconfig.json',
    // platform: 'browser',
  }),
  postcss(),
  json(),
  replace({ preventAssignment: true }),
  // alias({ entries: [] }),
];

const basePath = 'dist';

const externals = [
  // 'dayjs/locale/ru',
  '@emotion/server/create-instance',
  '@emotion/cache',
  '@emotion/utils',
  '@emotion/serialize',
  'react-proptypes',
  ...Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.dependencies,
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: [
      // {
      //   name: packageJson.name,
      //   // file: packageJson.main,
      //   format: 'cjs',
      //   sourcemap: true,
      //   dir: path.join(basePath, 'cjs'),
      //   preserveModules: true,
      //   exports: 'named',
      //   externalLiveBindings: false,
      // },
      {
        name: packageJson.name,
        format: 'esm',
        sourcemap: true,
        dir: path.join(basePath, 'esm'),
        preserveModules: true,
        externalLiveBindings: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins,
    external: externals,
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts' }],
    plugins: [dts()],
    external: [/\.(css|scss|sass|less)$/],
  },
];
