const { AllureReporter } = require('cucumberjs-allure2-reporter');

const allureReporter = new AllureReporter({
    resultsDir: 'allure-results'
});

module.exports = allureReporter;
