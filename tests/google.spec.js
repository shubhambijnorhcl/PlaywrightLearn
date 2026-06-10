import { test } from '@playwright/test';

test('Open Google with Inspector', async ({ page, context }) => {
    // Enable debugging mode
    await context.enableDebugger?.();

    await page.goto('https://www.google.com');

    // This will pause execution and open the Inspector
    await page.pause();
});
