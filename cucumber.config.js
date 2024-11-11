const { defineConfig } = require('cucumber');

module.exports = defineConfig({
    output: './results',
    require: [
        './tests/step-definitions/**/*.js',
    ],
    format: ["allure-cucumberjs/reporter"],
    formatOptions: {
        resultsDir: "results",
    },
});
