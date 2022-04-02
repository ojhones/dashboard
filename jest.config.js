module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};
