import { test, expect } from '@playwright/test'
import { chromium } from 'playwright'

test("testttttt", async () => {
    const Browser = await chromium.launch({ headless: false });
    const page = await Browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    const fname = await page.locator('id=input-firstname');

    const lname = await page.locator('id=input-Latname');

    await fname.fill("Test");
    await lname.fill("123456");




})
