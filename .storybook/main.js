const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  webpackFinal: async config => {
    config.resolve.alias["@components"] = path.resolve(__dirname, '../src/components/core')
    config.resolve.alias["@layout"] = path.resolve(__dirname, '../src/components/layout')
    config.resolve.alias["@utils"] = path.resolve(__dirname, '../src/utils')
    config.resolve.alias["@tokens"] = path.resolve(__dirname, '../src/tokens/index.ts')
    config.resolve.alias["@lapoConfig"] = path.resolve(__dirname, '../src/lapo.config.ts')
    return config
 },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}