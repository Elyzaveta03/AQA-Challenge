const {Given, When, Then, BeforeAll, AfterAll, setDefaultTimeout, Before} = require('@cucumber/cucumber');
const {chromium} = require('playwright');
const {faker} = require("@faker-js/faker/locale/ar");
const message1 = faker.hacker.phrase();
const message2 = faker.hacker.phrase();
const { expect } = require('@playwright/test');
let page, browser;
setDefaultTimeout(60 * 1000);

Before(async function () {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    page = await context.newPage();
});

AfterAll(async () => {
    await browser.close();
});

Given('User logged in as {string} for type message', async (username) => {
    await page.goto('http://localhost:3001');
    await page.fill('#username', username);
    await page.fill('#password', 'pass1');
    await page.click('#login-button');
});

When('Type message into the message input as user1', async function () {
    await page.fill('#message-input', message1);
    await page.click('#send-button');
});

When('User switches to another user and logs in as {string}', async function (username) {
    await page.reload();
    await page.goto('http://localhost:3001');
    await page.fill('#username', username);
    await page.fill('#password', 'pass2');
    await page.click('#login-button');
});

When('User types message into the message input as user2', async () => {
    await page.fill('#message-input', message2);
    await page.click('#send-button');
    await page.waitForTimeout(1000);
});

Then('User should see the chat history between user1 and user2', async () => {
    const chatMessages = await page.$$('#message-area p');
    let hasUser1Message = false;
    let hasUser2Message = false;
    for (const message of chatMessages) {
        const messageText = await message.textContent();
        if (messageText.includes('user1:')) {
            hasUser1Message = true;
        }
        if (messageText.includes('user2:')) {
            hasUser2Message = true;
        }
    }
    expect(hasUser1Message).toBe(true);
    expect(hasUser2Message).toBe(true);
});


