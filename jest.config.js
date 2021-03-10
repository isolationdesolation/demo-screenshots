module.exports = {
  preset: "ts-jest",
  verbose: true,
	testEnvironment: "node",
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ["jest-allure/dist/setup", "./jest-setup.ts"],
  reporters: ["jest-screenshot/reporter", "jest-progress-bar-reporter"],
};
