const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/reports/junit/results-[hash].xml',
    toConsole: true,
  },
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
