
import { test, expect } from '@playwright/test';

test('Facebook login page test', async ({ page }) => {
    await page.goto('https://www.facebook.com');

    await expect(page).toHaveTitle('Facebook - log in or sign up');

})