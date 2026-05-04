import { test, expect } from '@playwright/test';

//This is an ES module import statement in TypeScript/JavaScript.
//It imports specific testing utilities from Playwright’s test library.

/*test is used to:

Define a test case
Group test logic
Run automation steps */

/*
expect is used for:

Assertions
Validating results */

test('Verify the title of the app.vwo.com', async ({ page }) => {
  await page.goto("https://app.vwo.com");
  await expect(page).toHaveTitle("Login - VWO");
});