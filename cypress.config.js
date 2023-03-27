const { defineConfig } = require('cypress');
module.exports = {
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            // implement node event listeners here
        },
    },
};
