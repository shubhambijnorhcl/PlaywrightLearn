import { test, chromium, expect } from '@playwright/test';
test("The testing Academy test cases", async ({ page }) => {

    const url = await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    const username = page.getByRole('textbox', { name: 'Username' });
    const password = page.getByRole('textbox', { name: 'Password' });
    const loginButton = page.getByRole('button', { name: 'Login' });
    let tta_products = page.locator('//*[@data-product="tta-bolt-tshirt"]');
    let tta_cart = page.getByRole('link', { id: 'shopping_cart_container' });

    await username.fill('standard_user');
    await password.fill('tta_secret');
    await loginButton.click();

    await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/inventory');
    await tta_products.click();

}
);