import {test , expect} from '@playwright/test';

test("Go to TTA bank website and transfer fund", async ({page}) => {

await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

  // Go to page URL and sign up

await page.getByRole('button', { name: 'Sign Up' }).click()
await page.getByRole('textbox', { name: 'John Doe' }).fill("Harshita")
await page.getByRole('textbox', { name: 'you@example.com' }).fill("hjain@gmail.com")
await page.getByRole('textbox', { name: '••••••••' }).fill("Kimi@26")
await page.getByRole('button', { name: 'Create Account' }).click()

 // Check Initial Balance

 await expect(page.getByRole("heading", { name: "$50,000.00" })).toBeVisible();
  await expect(page.getByRole("main")).toContainText("$50,000.00");

  //Transfer fund


  await page.getByRole("button", { name: "Transfer Funds" }).click();
  await page.getByPlaceholder("0.00").click();
  await page.getByPlaceholder("0.00").fill("5000");
  await page.getByPlaceholder("e.g. Rent for October").click();
  await page.getByPlaceholder("e.g. Rent for October").fill("Fees");
  await page.getByText("Continue").click();
  await page.getByText("Confirm Transfer", { exact: true }).click();
  await page.locator('button:has-text("Dashboard")').click();
  await expect(page.getByRole("heading", { name: "$45,000.00" })).toBeVisible();
  await expect(page.getByRole("main")).toContainText("$45,000.00");
});
