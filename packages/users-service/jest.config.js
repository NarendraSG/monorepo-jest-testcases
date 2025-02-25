module.exports = {
  testEnvironment: "node",
  displayName: "users-service",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.test.js"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^@monorepo-demo/(.*)$": "<rootDir>/../$1",
  },
};
