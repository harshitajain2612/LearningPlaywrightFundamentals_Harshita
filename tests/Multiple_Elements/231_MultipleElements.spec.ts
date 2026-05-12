import { test, expect } from '@playwright/test';

test.describe('Multiple elements handling' , () => {

test("Basic Test - verify page title", async ({ page }) => {

//Navigate to a sample page

   await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

const rightHandPanelText: string[]  =await page.locator("a.list-group-item").allInnerTexts();

//allInnerTexts() -- retruns text

console.log(rightHandPanelText.length);

for(const linkText of rightHandPanelText ){
    if (linkText === 'My Account'){
        await page.getByText(linkText).first().click()
        break;
    }
}

const rightPanelLinks  = await page.locator('a.list-group-item').all();

//all() - retruns links

for(const links of rightPanelLinks ){
   console.log(await links.getAttribute("href"));
}




});

});