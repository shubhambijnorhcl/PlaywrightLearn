import { test, expect } from "@playwright/test";

test("login test", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await page.fill("#username", "admin");
    await page.fill("#password", "pass123");
    await page.click("#login-btn");
    await expect(page).toHaveURL("/dashboard");

    await page.close();


});

test("login test new", async ({ page }) => {
    await page.goto("https://gmail.com");
    await page.close();



});




