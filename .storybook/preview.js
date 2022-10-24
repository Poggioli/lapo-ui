import { blueDarkTheme, blueLightTheme } from '../src/core/lapo.config';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  multipleThemesStitches: {
    default: 'blue light',
    values: [
      {
        name: 'blue dark',
        theme: blueDarkTheme
      },
      {
        name: 'blue light',
        theme: blueLightTheme
      }
    ]
  },
  backgrounds: {
    default: 'main-app',
    values: [
      {
        name: 'main-app',
        value: 'var(--lapo--colors-background-app)'
      },
      {
        name: 'dark-blue',
        value: 'var(--lapo--colors-background-app)'
      }
    ]
  }
};
