import { test, type Page, chromium, type Browser } from '@playwright/test'



let browser: Browser;
let page: Page;

test.describe("Hooks", () => {
    test.beforeAll(async () => {
        console.log("launch the browser");
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
    })

    test.afterAll(async () => {
        console.log("close the browser");

        await browser.close();
    })

    test.beforeEach(async () => {

        console.log("Launch the url");
        await page.goto("https://automationexercise.com/login");

    })

    test.afterEach(async () => {
        console.log("test completed");


    })

    test("first tc", async () => {
        const email = await page.getByRole("textbox", { name: 'email' });
        const password = await page.getByRole("textbox", { name: 'password' });
        const login = await page.getByRole("link", { name: 'Login' });

        await email.fill("test@test.com");
        await password.fill("shgdhwd");
        await login.click();
    })
})
