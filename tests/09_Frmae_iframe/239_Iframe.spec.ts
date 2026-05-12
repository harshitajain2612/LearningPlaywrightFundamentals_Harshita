import { test, expect, FrameLocator } from '@playwright/test';

test('Frame within frame ', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    let vehicleFrame : FrameLocator  =  await page.frameLocator('#frame-one');

    //frameLocator function works for both iframe and frame

   await vehicleFrame.locator('#RESULT_TextField-1').fill("Creta");

    await vehicleFrame.locator('#RESULT_TextField-2').fill("Harshita");
   
    await vehicleFrame.locator('#RESULT_TextField-3').fill("MH-12-AB-2612");

       
    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

     await vehicleFrame.locator('#RESULT_TextField-4').fill("2016");

    await vehicleFrame.locator('#RESULT_TextArea-1').fill("Amzing car in a budget");

    await vehicleFrame.getByRole('button' , { name : 'Submit registration'}).click();

    //or

    await vehicleFrame.getByText('Submit registration' , { exact : true}).click();

    let output = await vehicleFrame.locator('#vehicle-output').innerText();

    console.log(output);

   //await expect(output).toContainText();
   
    await page.waitForTimeout(5000);





});




