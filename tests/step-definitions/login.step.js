const { Given, When, Then, setDefaultTimeout, Before, After } = require('@cucumber/cucumber');
const { chromium } = require("@playwright/test");

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
});

After(async function () {
    await browser.close();
});

Given('Go to the login page', async function () {
    await page.goto('http://localhost:3001');
});

When('Enter a valid username and password', async function () {
    await page.fill('#username', 'user1');
    await page.fill('#password', 'pass1');
    await page.click('#login-button');
    await page.waitForLoadState('domcontentloaded');
});

When('Enter an invalid username', async function () {
    await page.goto('http://localhost:3001');
    await page.fill('#username', 'invalidUser');
    await page.fill('#password', 'pass1');
    await page.click('#login-button');
});

When('Enter an invalid password', async function () {
    await page.goto('http://localhost:3001');
    await page.fill('#username', 'user1');
    await page.fill('#password', 'invalidPassword');
    await page.click('#login-button');
});

Then('Should see an error message', async function () {
    const errorPopup = page.locator('#error-popup');
    await errorPopup.waitFor({ state: 'visible' });
    await page.locator('#close-popup').click();
});

