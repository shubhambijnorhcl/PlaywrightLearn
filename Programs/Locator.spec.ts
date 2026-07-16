import { test, expect } from '@playwright/test'
import { chromium } from 'playwright'

test(
    "Locator test", async () => {
        // const browser = await chromium.launch({ headless: false, channel: 'chrome' });
        const browser = await chromium.launchPersistentContext('', { headless: false, channel: 'chrome' })
        const page = await browser.newPage()
        await page.goto("https://www.functionize.com/h/ai-ml-testing-tools");
        await page.locator('[name="firstname"]').fill('test123');
        await page.locator('[name="lastname"]').fill("test");
        await page.getByLabel("Job Role").waitFor({ state: 'visible' });
        await page.getByRole('checkbox').first().click();


    }
)


