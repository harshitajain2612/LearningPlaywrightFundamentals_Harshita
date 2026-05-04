import { test, expect } from '@playwright/test';

//Skip test

test.skip('skipped test' , async ({ page )} => {
//         This test is skipped
 });

 //only run this test

 test.only('focused test', async ({ page}) => {

     //only this test runs
 });

 //Mark as failing

  test.fail('Expected to fail', async ({ page}) => {

     //Test is expected to fail
 });

  //Slow test (3x timeout)

  test.slow('slow test', async ({ page}) => {

     //has expected timeout
 });

 //conditional skip

 test('conditional' , async ({page, browserName}) => {
    test.skip( browserName === 'firefox', 'Not supported in Firefix');
 })