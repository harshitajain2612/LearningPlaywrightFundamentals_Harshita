import { test, expect } from '@playwright/test';

test("Automate the login functionality of the vwo.com website", async ({ page }) => {

await page.goto("https://app.vwo.com/#/login");
await page.getByRole("textbox",{name : "email"}).fill("admin");
await page.getByRole("textbox",{name : "password"}).fill("password");

await page.getByRole('button', { name: 'Sign in', exact :true }).click();

page.locator('#js-notification-box-msgn');

//await expect(ErroMessage).toBeVisible();
await expect(page.getByText("Your email, password, IP address or location did not match")).toBeVisible();

});