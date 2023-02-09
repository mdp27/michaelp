const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    viewportWidth: 1680,
    viewportHeight: 1050,
    chromeWebSecurity: false,
    retries: {
      "runMode": 2,
      "openMode": 1
      },
    requestTimeout: 60000,
    responseTimeout: 60000,
    numTestsKeptInMemory: 10,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
