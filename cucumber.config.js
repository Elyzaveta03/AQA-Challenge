const { defineConfig } = require('cucumber');

module.exports = defineConfig({
    output: './allure-results',
    require: [
        './tests/step-definitions/**/*.js',
    ],
    format: ["allure-cucumberjs/reporter"],
    formatOptions: {
        resultsDir: "allure-results",
    },
});
