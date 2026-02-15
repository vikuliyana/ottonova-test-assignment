const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.ottonova.de",
    includeShadowDom: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
