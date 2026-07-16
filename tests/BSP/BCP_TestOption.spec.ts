import { test, expect } from '@playwright/test';

test("Context with Option", async ({ browser }) => {
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'en-US',
        timezoneId: 'America/New_York',
        geolocation: { latitude: 40.7128, longitude: -74.0060 },
        permissions: ['geolocation'],
    });
    const page = await context.newPage();
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle("Login - Wingify");

});

test("mobile context", async ({ browser }) => {

    const iPhone = {
        viewport: { width: 375, height: 667 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14E5239e Safari/602.1',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
    };
    const context = await browser.newContext(iPhone);
    const page = await context.newPage();
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle("Login - Wingify");
});