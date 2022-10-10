// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@lapo': '<rootDir>/src/core/lapo.config.ts',
    '@layout/(.*)': '<rootDir>/src/layout/$1',
    '@tokens': '<rootDir>/src/tokens/index.ts',
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
    '!./src/**/index.ts',
    '!./src/**/tokens.ts'
  ],
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};
