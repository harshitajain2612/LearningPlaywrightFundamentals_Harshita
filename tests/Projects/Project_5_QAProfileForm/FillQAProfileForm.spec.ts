import { test, expect } from '@playwright/test';

test('Fill the QA profile form', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');

await page.locator('[name="firstName"]').fill('Harshita');

await page.locator('[data-testid="last-name"]').fill('Jain');

await page.locator('[data-testid="gender-female"]').check();

await page.locator('#years-experience').selectOption('7');

//await page.locator('#profile-date').fill('12-05-2026');

await page.waitForTimeout(5000);

await page.locator('[data-testid="profession-automation"]').check();


await page.locator('[data-testid="tool-selenium"]').check();


await page.locator('[data-testid="continent-europe"]').check();

await page.getByRole('tab', {name : 'Wait Commands', exact : true}).click();

await page.getByRole('button', {name : 'Save profile', exact : true}).click();



});
