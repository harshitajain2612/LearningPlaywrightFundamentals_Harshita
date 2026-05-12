import { test, expect } from '@playwright/test';

test('Hover Add on and click WIFI and verify the JSON', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/webtable');

await page.locator('#employee-search').fill('Kabir');

await expect(page.getByText('Kabir.Khan')).toBeVisible();

await page.getByLabel('Select Kabir.Khan').check();

await page.waitForTimeout(5000);




})
