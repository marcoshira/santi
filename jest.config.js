module.exports = {
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/api/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/Menu/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/NavLinks/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/ProductPage/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/RegWrapper/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/components/Wrapper/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/templates/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/shared-types/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],

  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.out/', '/public/'],

  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
};
