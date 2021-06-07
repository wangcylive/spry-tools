// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node',
  ],
  roots: [
    '<rootDir>',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'node',
  testMatch: [
    "**/__tests__/**/*.(j|t)s?(x)"
    // "**/?(*.)+(spec|test).js?(x)"
  ],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  verbose: true,
}