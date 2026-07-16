import { chromium } from "playwright";
import type { Browser, Page, BrowserContext } from "playwright";

async function run() {
    let browser: Browser = await chromium.launch({ headless: false });
    let context1 = await browser.newContext();
    console.log("Browser Launched", context1);
    let page: Page = await context1.newPage();
    console.log("Context creqted", page);

    let context2 = await browser.newContext();
    console.log("Browser Launched", context2);
    let page1: Page = await context2.newPage();
    console.log("Context creqted", page1);

    await page.goto("https://www.facebook.com/");
    await page1.goto("https://www.instagram.com/");

    await page.close();
    await page1.close();
    await context1.close();
    await context2.close();
    await browser.close();
}

run();

