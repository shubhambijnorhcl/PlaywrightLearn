import { test, expect } from '@playwright/test';

test.use({
    storageState: "./user-session.json"
});

test("go directly to dashboard -no login", async ({ page }) => {
    await test.step("Open dashboard URL", async () => {
        await page.goto("https://app.wingify.com/#/dashboard/get-started?accountId=1227004");
        await expect(page).toHaveURL(/dashboard/);
        if (!page.getByTitle) {
            sessionStorage.savesession();
        }



        console.log("Dashboard loaded - no login needed");
        await page.waitForTimeout(2000);
    });

});
test("go directly to settings-no login", async ({ page }) => {
    await test.step("Open settings URL", async () => {
        await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");

        await expect(page).toHaveURL(/settings/);

        console.log("Settings loaded - still logged in");
        await page.waitForTimeout(2000);
    });
});
