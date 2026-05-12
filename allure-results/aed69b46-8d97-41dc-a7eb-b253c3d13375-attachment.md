# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\VwoFreeTrial.spec.ts >> Go to VWO free trial page and validate error message
- Location: tests\Tasks\VwoFreeTrial.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpagen", waiting until "load"

```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test';
  2  | 
  3  | test("Go to VWO free trial page and validate error message", async ({page}) => {
  4  | 
> 5  |  await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpagen");
     |             ^ Error: page.goto: Target page, context or browser has been closed
  6  | 
  7  | await page.locator("#page-v1-step1-email").fill("hjain@gmail.com");
  8  | 
  9  | await page.getByRole('checkbox', { name: 'Create a Free Trial Account', exact :true }).click();
  10 | 
  11 | await page.getByRole('button', { name: 'gdpr_consent_checkbox', exact :true }).click();
  12 | 
  13 | 
  14 | });
```