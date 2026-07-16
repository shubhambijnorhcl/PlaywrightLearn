import { test, expect, type BrowserContext, type Page, type Locator } from '@playwright/test'
import { chromium, type Browser } from 'playwright'

test('BrowserContext test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });

    const browserCn1: BrowserContext = await browser.newContext();
    const page1: Page = await browserCn1.newPage();

    const browserCn2: BrowserContext = await browser.newContext(); 
    const page2: Page = await browserCn2.newPage();

    //BrowserContext1
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const email: Locator = await page1.locator('#input-email');
    const password: Locator = await page1.locator('#input-password');
    const loginButton: Locator = await page1.locator('[value="Login"]');

    await email.fill("srivastavsrivastav54@gmail.com");
    await password.fill("Shumu@9634");
    await loginButton.click();
    await page1.waitForTimeout(3000);
    const pageTitle = await page1.title();
    console.log(pageTitle);

    expect(pageTitle).toEqual("My Account");


    //BrowserContext2
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const email1: Locator = await page2.locator('#input-email');
    const password1: Locator = await page2.locator('#input-password');
    const loginButton1: Locator = await page2.locator('[value="Login"]');

    await email1.fill("userpw@pw.com");
    await password1.fill("Test@123");
    await loginButton1.click();
    await page1.waitForTimeout(3000);
    const pageTitle1 = await page2.title();
    console.log(pageTitle1);

    expect(pageTitle).toEqual("My Account");

    await browserCn1.close();
    await browserCn2.close();
    await browser.close();



})