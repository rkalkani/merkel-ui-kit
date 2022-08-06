/* eslint-disable no-undef */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: [],
  moduleNameMapper: {
    '@merklescience/ui': '<rootDir>/src',
    '@src/(.*)': '<rootDir>/src',
  },
};
