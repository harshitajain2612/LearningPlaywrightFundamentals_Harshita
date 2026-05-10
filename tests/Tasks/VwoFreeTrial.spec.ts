import {test , expect} from '@playwright/test';

test("Go to VWO free trial page and validate error message", async ({page}) => {

 await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpagen");

await page.locator("#page-v1-step1-email").fill("hjain@gmail.com");

await page.getByRole('checkbox', { name: /I agree/i }).check();

await page.getByRole('button', { name: 'Create a Free Trial Account', exact :true }).click();

//await expect(ErroMessage).toBeVisible();
await expect(page.getByText("gmail.com doesn't look like a business domain. Please use your business email.")).toBeVisible();

});