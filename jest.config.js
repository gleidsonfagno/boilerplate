module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/storiesOf.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
