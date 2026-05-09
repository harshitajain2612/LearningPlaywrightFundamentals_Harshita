import { test, expect } from '@playwright/test';

test("Automate the login functionality of the Cura website", async ({ page }) => {

await page.goto("https://katalon-demo-cura.herokuapp.com/");

let buttonField = await page.locator("#btn-make-appointment");

await buttonField.click();

let usernameField =  await page.locator("#txt-username");

let passwordField =  await page.locator("#txt-password");

let loginButtonField =  await page.locator("#btn-login");

await usernameField.fill("John Doe");

await passwordField.fill("ThisIsNotAPassword");

await loginButtonField.click();

await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

await expect(page.locator("h2")).toHaveText("Make Appointment"); //have to use locator here since its a text present on the page not on the tab


});

