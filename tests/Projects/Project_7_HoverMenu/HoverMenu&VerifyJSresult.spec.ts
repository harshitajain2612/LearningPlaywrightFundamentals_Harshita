import { test, expect } from '@playwright/test';

test('Hover Add on and click WIFI and verify the JSON', async ({ page }) => {

await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');


await page.locator('div[data-testid="nav-add-ons"]').hover();

await page.getByTestId('test-id-Wifi').click();

    // Capture the JSON text from output div
const jsonText = await page.locator('#output').textContent();

console.log(jsonText);

// Convert string into JSON object
const jsonData = JSON.parse(jsonText!);

// Assertions
expect(jsonData.clicked).toContain('Wi-Fi');
expect(jsonData.testId).toBe('test-id-Wifi');

// Optional validation for time
expect(jsonData.at).toBeTruthy();

await page.waitForTimeout(5000);




})
