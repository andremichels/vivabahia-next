module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '\!src/**/*.d.ts',
    '\!src/app/**/*page.tsx',
    '\!src/app/**/*layout.tsx'
  ]
};
