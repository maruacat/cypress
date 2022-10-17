const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "pageLoadTimeout": 200000,
    "experimentalSessionAndOrigin": true,
    'chromeWebSecurity':false,
    "retries": 1,
    "baseUrl": 'https://homecooksstaging.uk',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
