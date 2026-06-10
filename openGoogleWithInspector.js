const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({
        headless: false  // Show the browser window
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    // Open Google
    await page.goto('https://www.google.com');

    // Pause execution - this will open the Inspector
    await page.pause();

    await context.close();
    await browser.close();
})();
