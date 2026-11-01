const { defineConfig } = require('cypress');

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

module.exports = defineConfig({
  reporter: 'mocha-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/reports/html',
      reportFilename: `relatorio-${timestamp}`,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reportPageTitle: 'Automation Exercise - Relatório',
      embeddedJson: true,
      overwrite: false,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: `cypress/reports/junit/results-${timestamp}.xml`,
      toConsole: true,
    },
  },
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
