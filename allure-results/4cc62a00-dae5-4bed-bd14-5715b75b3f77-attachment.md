# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Basics/TestVWOcom.spec.ts >> go directly to settings-no login
- Location: tests/Basics/TestVWOcom.spec.ts:22:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /settings/
Received string:  "https://app.wingify.com/#/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://app.wingify.com/#/login"

```

```yaml
- main "Application main content":
  - img "Wingify"
  - paragraph: Sign in to Wingify platform
  - list:
    - listitem:
      - text: Email address
      - textbox "Email address":
        - /placeholder: Enter email ID
        - text: opg73@singleuseemail.site
    - listitem:
      - text: Password
      - textbox "Password":
        - /placeholder: Enter password
      - button "Toggle password visibility":
        - img
    - listitem:
      - button "Forgot Password?"
    - listitem:
      - text: Remember me
      - img
    - listitem:
      - button "Sign in"
    - listitem:
      - heading "Or" [level=6]
    - listitem:
      - button "Sign in with Google":
        - img
        - text: Sign in with Google
    - listitem:
      - button "Sign in using SSO":
        - img
        - text: Sign in using SSO
    - listitem:
      - button "Sign in with Passkey":
        - img
        - text: Sign in with Passkey
    - listitem:
      - text: Don't have an account?
      - link "Start a free trial":
        - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
    - listitem:
      - text: By continuing, you agree to Wingify's
      - link "Privacy policy":
        - /url: https://wingify.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
      - text: "&"
      - link "Terms":
        - /url: https://wingify.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
      - text: .
  - img "Wingify abtasty logo"
  - img
  - img "Wingify abtasty logo"
  - heading "Welcome to Wingify!" [level=1]
  - heading "app.vwo.com has transitioned to app.wingify.com" [level=2]
  - heading "Your plans, features, and data remain unchanged." [level=2]
  - link "Learn More":
    - /url: https://vwo.com/product-updates/vwo-wingify-aligning-our-domain/
    - text: Learn More
    - img
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
  8  |     await test.step("Open dashboard URL", async () => {
  9  |         await page.goto("https://app.wingify.com/#/dashboard/get-started?accountId=1227007");
  10 |     });
  11 | 
  12 |     await test.step("Verify dashboard page is loaded", async () => {
  13 |         await expect(page).toHaveURL(/dashboard/);
  14 |     });
  15 | 
  16 |     await test.step("Wait for the dashboard to settle", async () => {
  17 |         console.log("Dashboard loaded - no login needed");
  18 |         await page.waitForTimeout(2000);
  19 |     });
  20 | });
  21 | 
  22 | test("go directly to settings-no login", async ({ page }) => {
  23 |     await test.step("Open settings URL", async () => {
  24 |         await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");
  25 |     });
  26 | 
  27 |     await test.step("Verify settings page is loaded", async () => {
> 28 |         await expect(page).toHaveURL(/settings/);
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  29 |     });
  30 | 
  31 |     await test.step("Wait for the settings page to settle", async () => {
  32 |         console.log("Settings loaded - still logged in");
  33 |         await page.waitForTimeout(2000);
  34 |     });
  35 | });
  36 | 
```