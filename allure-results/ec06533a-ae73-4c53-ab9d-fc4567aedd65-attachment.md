# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Basics/TestVWOcom.spec.ts >> go directly to dashboard -no login
- Location: tests/Basics/TestVWOcom.spec.ts:7:1

# Error details

```
Error: page.goto: net::ERR_ABORTED at htttps://app.wingify.com/#/dashboard/get-started?acountId=1227004
Call log:
  - navigating to "htttps://app.wingify.com/#/dashboard/get-started?acountId=1227004", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.use({
  4  |     storageState: "./user-session.json"
  5  | });
  6  | 
  7  | test("go directly to dashboard -no login", async ({ page }) => {
> 8  |     await page.goto("htttps://app.wingify.com/#/dashboard/get-started?acountId=1227004");
     |                ^ Error: page.goto: net::ERR_ABORTED at htttps://app.wingify.com/#/dashboard/get-started?acountId=1227004
  9  |     await expect(page).toHaveURL(/dashboard/);
  10 |     console.log("Dashboard loaded -no login needed");
  11 |     await page.waitForTimeout(2000);
  12 | 
  13 | 
  14 | })
  15 | 
  16 | 
  17 | test("go directly to settings-no login  ", async ({ page }) => {
  18 |     await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");
  19 |     await expect(page).toHaveURL(/settings/);
  20 |     console.log("Settings loaded -still logged in");
  21 |     await page.waitForTimeout(2000);
  22 | })
  23 | 
```