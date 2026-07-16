import { test, expect, type BrowserContext, type Page, type Locator } from '@playwright/test'
import { chromium, type Browser } from 'playwright'

test('Authentication test', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    const browsercontext: BrowserContext = await browser.newContext();
    const page1: Page = await browsercontext.newPage();

    const username = "admin";
    const password = "admin";
    const authcheck = 'Basic ' + btoa(username + ":" + password);
    page1.setExtraHTTPHeaders({ Authorization: authcheck });
    await page1.goto("https://the-internet.herokuapp.com/basic_auth");

}
)