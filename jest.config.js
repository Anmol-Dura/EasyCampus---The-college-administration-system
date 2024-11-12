module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transforms TypeScript files using ts-jest
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true, // Enables ES module support in ts-jest
    },
  },
  moduleNameMapper: {
    // If you're using paths in tsconfig.json, map them here for Jest compatibility
    '^@/(.*)$': '<rootDir>/src/$1', 
  },
};
