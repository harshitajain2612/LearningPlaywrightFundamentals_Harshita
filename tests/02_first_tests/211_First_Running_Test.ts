//Creating your first playwright test

// - Test structure
// - Basic assertions
// - Navigations
// - Element interactions

import { test, expect } from '@playwright/test';

test ('verify our first TC' , async ({ page }) => {

   await  page.goto('https://app.vwo.com');

   await expect(page).toHaveTitle('Login - VWO');

   const img_vwo = page.locator('img');

   await expect(img_vwo).toBeVisible();
});