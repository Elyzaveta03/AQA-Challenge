const {Given, When, Then, Before, setDefaultTimeout, After} = require("@cucumber/cucumber");
const {chromium, expect} = require("@playwright/test");
const {faker} = require ("@faker-js/faker/locale/ar");
const message = faker.hacker.phrase();
let page, browser;
setDefaultTimeout(60 * 1000);

Before(async function () {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    page = await context.newPage();
});

After(async function () {
    await browser.close();
});

Given('User logged in as {string}', async function (username) {
    await page.goto('http://localhost:3001');
    await page.fill('#username', username);
    await page.fill('#password', 'pass1');
    await page.click('#login-button');
});

When('Type message into the message input', async function () {
    await page.fill('#message-input', message);
});

When('Click the send button', async function () {
    await page.click('#send-button');
});

Then('Should see the message in the chat window', async function () {
    await expect(page.locator('#message-area p').filter({ hasText: message })).toBeVisible();
});

When('Leave the message input empty', async function () {
    await page.fill('#message-input', '');
});

Then('I should see an error message saying {string}', async function (errorMessage) {
    const error = await page.textContent('.error-message');
    await expect(error).toBe(errorMessage);
});
