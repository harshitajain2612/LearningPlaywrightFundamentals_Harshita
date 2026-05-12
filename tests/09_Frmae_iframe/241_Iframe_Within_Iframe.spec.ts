import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Basic multi frame  Test - Interact with multiple frames', async ({ page }) => {

await page.goto('https://selectorshub.com/iframe-scenario/');

let Frame1 :FrameLocator =  page.frameLocator('#pact1');

let Frame2 :FrameLocator =  Frame1.frameLocator('#pact2');

let Frame3 :FrameLocator =  Frame2.frameLocator('#pact3');

await page.waitForTimeout(5000);

await Frame1.locator('#inp_val').first().fill('SRK');

await Frame2.locator('#jex').fill('ARI');
await Frame2.locator('#glaf').fill('Heaven');


 const headerText = await  Frame1.locator('h3').innerText();

 console.log(headerText);

});




