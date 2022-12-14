// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@lapo': '<rootDir>/src/config/lapo.config.ts',
    '@layout/(.*)': '<rootDir>/src/components/layout/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@tokens': '<rootDir>/src/tokens/index.ts',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@emotion/core': '<rootDir>/src/types/emotion.d.ts'
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**',
    '!./src/**/*stories.tsx',
    '!./src/**/*.config.ts',
    '!./src/tokens/**/*.ts',
    '!./src/types/**/*.ts',
    '!./src/**/styles.ts',
    '!./src/**/index.ts',
    '!./src/**/generateColors.ts',
    '!./src/**/tokens.ts',
    '!./src/**/*.spec.tsx.snap'
  ],
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};
