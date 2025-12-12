const nextEslintPluginNext = require('@next/eslint-plugin-next');
const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');

module.export = [
  { plugins: { '@next/next': nextEslintPluginNext } },
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  {
    ignores: ['.next/**/*', '**/out-tsc'],
  },
];
