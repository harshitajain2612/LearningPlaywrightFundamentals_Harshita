import { chromium, Browser, BrowserContext, Page} from 'playwright';

async function run(){

    //Level 1 : Launch browser - haviest opeartion, do it once

  let browser:Browser  = await chromium.launch( {headless :false});

  console.log("Browser luanched", browser);

//level 2 - create context - fresh sessions - isolated cookies

 let context: BrowserContext = await browser.newContext();
 console.log("Context created", context);

 //level 3 -open page - a tab inside the context

 let page:Page = await context.newPage();
 console.log("page opened");

 //cleanup  - reverse order

 await page.close();
 await context.close();
 await browser.close();



}

run();

//Browser launch
//Context created
//Page opened
//tilte verified