const { defineConfig } = require('cucumber');

module.exports = defineConfig({
    output: './reports/cucumber.json',
    publish: true,
    require: [
        './tests/step-definitions/**/*.js',
        './tests/features/**/*.feature',
    ],
    formatter: ['@cucumber/pretty', '@allure/cucumberjs'],
});
