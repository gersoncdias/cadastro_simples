const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  setupNodeEvents(on, config) {
   allureWriter(on, config);
    return config;
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs: true
  },
  fixturesFolder: false,
  video: false,
  reporter: "allure"
  
});
