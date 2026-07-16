import { test, expect } from '@playwright/test'
import { chromium, firefox } from 'playwright'

test("Locator test", async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    //Locator for Get Role
    // const header = await expect(page.getByRole('heading', { name: 'Register Account' })).toBeChecked;
    // console.log(header);
    await page.locator("form.form-horizontal").getByRole('textbox', { name: 'E-Mail' }).fill("test");
    await page.waitForTimeout(3000);



    const browser1 = await firefox.launch({ headless: false });
    const page1 = await browser1.newPage();
    await page1.goto("https://playwright.dev/docs/other-locators#chaining-selectors");

    await page1.waitForTimeout(2000);
    browser.close();
    browser1.close();

    //



}



)

