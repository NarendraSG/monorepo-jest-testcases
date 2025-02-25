module.exports = {
  testEnvironment: "node",
  // Updated testMatch to look for tests in two locations:
  // 1. Root level tests in /tests directory (integration tests)
  // 2. Package level tests in each service's __tests__ directory (unit tests)
  testMatch: [
    "<rootDir>/tests/**/*.test.js",
    "<rootDir>/packages/*/src/**/__tests__/**/*.test.js",
    "<rootDir>/packages/db-service/tests/*.test.js",
  ],
  moduleDirectories: ["node_modules"],

  // Added coverage configuration to generate test coverage reports
  collectCoverage: true,
  coverageDirectory: "coverage",
  // Multiple report formats for different use cases:
  // - text: For terminal output
  // - lcov: For tools like SonarQube
  // - html: For browser viewing
  coverageReporters: ["text", "text-summary", "html", "lcov"],

  // Exclude node_modules and integration tests from coverage reports
  // We exclude /tests/ because these are integration tests
  coveragePathIgnorePatterns: [
    "/node_modules/",
    // '/tests/',
    "/packages/common/",
  ],

  // Add moduleNameMapper to handle workspace packages
  moduleNameMapper: {
    "^@monorepo-demo/(.*)$": "<rootDir>/packages/$1",
  },
};
