# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project_4_TTA_BANK\SignUpTTA&TransterAmount.spec.ts >> Go to TTA bank website and transfer fund
- Location: tests\Projects\Project_4_TTA_BANK\SignUpTTA&TransterAmount.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'email' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - img [ref=e6]
    - heading "TTA Bank" [level=1] [ref=e9]
    - paragraph [ref=e10]: Create your digital account
  - generic [ref=e11]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - generic [ref=e14]: Full Name
        - generic [ref=e15]:
          - generic:
            - img
          - textbox "John Doe" [active] [ref=e16]: Harshita
      - generic [ref=e17]:
        - generic [ref=e18]: Email Address
        - generic [ref=e19]:
          - generic:
            - img
          - textbox "you@example.com" [ref=e20]
      - generic [ref=e21]:
        - generic [ref=e22]: Password
        - generic [ref=e23]:
          - generic:
            - img
          - textbox "••••••••" [ref=e24]
      - button "Create Account" [ref=e25] [cursor=pointer]
    - paragraph [ref=e27]:
      - text: Already have an account?
      - button "Sign In" [ref=e28] [cursor=pointer]
  - paragraph [ref=e29]:
    - text: © 2024 TTA Bank. All rights reserved.
    - text: Authorized and Regulated by the Financial Conduct Authority.
```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test';
  2  | 
  3  | test("Go to TTA bank website and transfer fund", async ({page}) => {
  4  | 
  5  | await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  6  | 
  7  | await page.getByRole("button", {name : 'Sign Up', exact :true}).click();
  8  | 
  9  | await page.getByPlaceholder("John Doe").fill("Harshita");
  10 | 
> 11 | await page.getByRole("textbox",{name : "email"}).fill("kimi@gmail.com");
     |                                                  ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  12 | 
  13 | //await page.getByPlaceholder("you@example.coma").fill("kimi@gmail.com");
  14 | 
  15 | await page.getByPlaceholder("••••••••").fill("Harshita@26");
  16 | 
  17 | 
  18 | 
  19 | });
  20 | 
  21 | 
```