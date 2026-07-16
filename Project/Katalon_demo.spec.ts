import { test, chromium, expect } from '@playwright/test';
test("Katalon Demo website test", async ({ page }) => {

    const url = await page.goto('https://katalon-demo-cura.herokuapp.com');

    let make_an_appointmant = await page.locator('//*[@id="btn-make-appointment"]');
    let username = await page.locator('#txt-username');
    let password = await page.locator('#txt-password');
    let login_button = await page.locator('#btn-login');
    let facility = await page.locator('[name="facility"]');
    let Healthcare_Program = await page.locator("#radio_program_medicaid");
    let visit_date = await page.locator("#txt_visit_date");
    let comment = await page.locator("#txt_comment");
    let BookAppointment = await page.locator("#btn-book-appointment");






    make_an_appointmant.click();

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Current URL is : " + page.url());

    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await login_button.click();

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    await facility.selectOption("Hongkong CURA Healthcare Center");
    await Healthcare_Program.click();
    await visit_date.fill("07/25/2026");
    await comment.fill("This is a sample comment.");
    await BookAppointment.click();

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");









});