module.exports = {
  bail: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json"
    }
  },
  verbose: true,
};
