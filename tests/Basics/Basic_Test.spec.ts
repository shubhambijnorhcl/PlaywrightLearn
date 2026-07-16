import { test, expect } from '@playwright/test'
test("Basic Test", async ({ page }) => {
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle("Login - Wingify");

});