const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1920,
  viewportHeight: 768,
  e2e: {
    baseUrl: 'https://automationexercise.com',
    defaultCommandTimeout: 5000, 
      // implement node event listeners here
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },
    },
    video: true
  });
