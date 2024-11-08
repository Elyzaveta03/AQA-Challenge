const { Given, When, Then, setDefaultTimeout, Before, After } = require('@cucumber/cucumber');
const { chromium } = require("@playwright/test");
const {info} = require("../../logger");

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
});

After(async function () {
    await page.close();
    await browser.close();
});

Given('Go to the log in page', async function () {
    info('open login page');
    await page.goto('http://localhost:3001');
});

When('Enter a valid username and password', async function () {
    info('user1 enter valid credential');
    await page.fill('#username', 'user1');
    await page.fill('#password', 'pass1');
    await page.click('#login-button');
    await page.waitForLoadState('domcontentloaded');
});

When('Enter an invalid username', async function () {
    info('user1 enter invalid username');
    await page.goto('http://localhost:3001');
    await page.fill('#username', 'invalidUser');
    await page.fill('#password', 'pass1');
    await page.click('#login-button');
});

When('Enter an invalid password', async function () {
    info('user1 enter invalid password');
    await page.goto('http://localhost:3001');
    await page.fill('#username', 'user1');
    await page.fill('#password', 'invalidPassword');
    await page.click('#login-button');
});

Then('Should see an error message', async function () {
    info('user1 check an error message');
    const errorPopup = page.locator('#error-popup');
    await errorPopup.waitFor({ state: 'visible' });
    await page.locator('#close-popup').click();
});

