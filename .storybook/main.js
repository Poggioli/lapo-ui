const path = require('path');
const fs = require('fs');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'multiple-themes-stitches'
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['@lapo'] = path.resolve(__dirname, '../src/core/lapo.config.ts');
    config.resolve.alias['@layout'] = path.resolve(__dirname, '../src/layout');
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@tokens'] = path.resolve(__dirname, '../src/tokens/index.ts');
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils');
    return config;
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
