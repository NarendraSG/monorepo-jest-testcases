module.exports = {
  testEnvironment: "node",
  displayName: "products-service",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.test.js"],
  moduleDirectories: ["node_modules"],
  // Add moduleNameMapper for local testing
  moduleNameMapper: {
    "^@monorepo-demo/(.*)$": "<rootDir>/../$1",
  },
};
