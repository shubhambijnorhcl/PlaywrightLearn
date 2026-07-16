import { test, expect, type Page, type Locator } from '@playwright/test'

import { firefox, chromium, type Browser } from 'playwright'

test('login page', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const email: Locator = await page.locator('#input-email');
    const password: Locator = await page.locator('#input-password');
    const loginButton: Locator = await page.locator('[value="Login"]');

    await email.fill("srivastavsrivastav54@gmail.com");
    await password.fill("Shumu@9634");
    await loginButton.click();
    await page.waitForTimeout(3000);
    const pageTitle = await page.title();
    console.log(pageTitle);

    expect(pageTitle).toEqual("My Account");

    browser.close();

})



