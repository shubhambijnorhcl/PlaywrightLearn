import { test, expect } from '@playwright/test'
test("Basic Test new", async ({ browser }) => {

    let context1 = await browser.newContext();
    let context2 = await browser.newContext();
    let page1 = await context1.newPage();
    let page2 = await context2.newPage();

    await page1.goto('https://app.vwo.com');
    await expect(page1).toHaveTitle("Login - Wingify");

    await page2.goto('https://www.instagram.com/');
    await expect(page2).toHaveTitle("Instagram");

    await context1.close();
    await context2.close();


});
