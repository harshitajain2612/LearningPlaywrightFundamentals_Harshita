# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\VwoFreeTrial.spec.ts >> Go to VWO free trial page and validate error message
- Location: tests\Tasks\VwoFreeTrial.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'gdpr_consent_checkbox', exact: true })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - blockquote [ref=e7]:
        - img "HDFC ERGO Logo" [ref=e8]
        - heading "HDFC ERGO" [level=3] [ref=e9]
        - paragraph [ref=e10]: Performics Lowers Cost Per Conversion, Improves RoAS 1.5X for HDFC ERGO General Insurance with VWO
        - generic [ref=e11]:
          - generic [ref=e12]: 47 %
          - img [ref=e13]
        - generic [ref=e15]: Cost Per Acquisition
      - generic [ref=e16]:
        - heading "Trusted by 3000+ leading brands globally" [level=3] [ref=e17]
        - generic [ref=e19]:
          - img "Homecentre Logo" [ref=e21]
          - img "ICICI Logo" [ref=e23]
          - img "HDFC Logo" [ref=e25]
          - img "Paytm Logo" [ref=e27]
          - img "Policy Bazaar Logo" [ref=e29]
          - img "Browserstack Logo" [ref=e31]
    - generic [ref=e32]:
      - generic [ref=e34]:
        - link "VWO Logo" [ref=e36] [cursor=pointer]:
          - /url: https://vwo.com/
          - img "VWO Logo" [ref=e37]
        - generic [ref=e39]:
          - generic [ref=e40]:
            - heading "Sign up for a full-featured trial" [level=1] [ref=e41]
            - paragraph [ref=e42]: Free for 30 days. No credit card required
          - generic [ref=e43]:
            - generic [ref=e44]:
              - text: Business Email
              - textbox "Business Email" [active] [ref=e45]:
                - /placeholder: name@yourcompany.com
                - text: hjain@gmail.com
              - generic [ref=e46]: Invalid Email
            - generic [ref=e47]:
              - checkbox "I agree to VWO's Privacy Policy & Terms" [ref=e48] [cursor=pointer]
              - generic [ref=e49] [cursor=pointer]:
                - text: I agree to VWO's
                - link "Privacy Policy" [ref=e50]:
                  - /url: https://vwo.com/privacy-policy/
                - text: "&"
                - link "Terms" [ref=e51]:
                  - /url: https://vwo.com/terms/
            - button "Create a Free Trial Account" [disabled] [ref=e53]
          - generic [ref=e54]:
            - heading "What you get with VWO Free Trial:" [level=2] [ref=e55]
            - list [ref=e56]:
              - listitem [ref=e57]:
                - img [ref=e58]
                - text: Understand visitor behaviour
              - listitem [ref=e60]:
                - img [ref=e61]
                - text: Run A/B, multivariate & feature experiments
              - listitem [ref=e63]:
                - img [ref=e64]
                - text: Personalize experiences for target audiences
              - listitem [ref=e66]:
                - img [ref=e67]
                - text: Leverage AI - VWO Copilot features
              - listitem [ref=e69]:
                - img [ref=e70]
                - text: Use VWO Customer Data Platform for user segmentation & targeting
      - generic:
        - generic:
          - img "vwo gdpr ready badge"
        - generic:
          - img "VWO CCPA ready badge"
        - generic:
          - img "SOC 2 Type II Badge"
        - generic:
          - img "VWO ISO IEC 27001 Certification Badge"
        - generic:
          - img "VWO BS 10012 Certification Badge"
  - region "Cookie banner" [ref=e72]:
    - alertdialog "Privacy" [ref=e73]:
      - generic [ref=e75]:
        - generic [ref=e78]: We use cookies to ensure you get the best experience on our website. You can control how we use cookies by clicking on Cookie Settings. If you continue to use this site, you consent to our use of cookies.
        - generic [ref=e80]:
          - button "Cookie Settings" [ref=e81] [cursor=pointer]
          - button "Allow Cookies" [ref=e82] [cursor=pointer]
      - button "Close" [ref=e84] [cursor=pointer]
  - iframe [ref=e85]:
    
  - button "Open Intercom Messenger" [ref=e86] [cursor=pointer]:
    - img [ref=e88]
    - generic:
      - img
```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test';
  2  | 
  3  | test("Go to VWO free trial page and validate error message", async ({page}) => {
  4  | 
  5  |  await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpagen");
  6  | 
  7  | await page.locator("#page-v1-step1-email").fill("hjain@gmail.com");
  8  | 
> 9  | await page.getByRole('checkbox', { name: 'gdpr_consent_checkbox', exact :true }).click();
     |                                                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  10 | 
  11 | 
  12 | 
  13 | await page.getByRole('button', { name: 'Create a Free Trial Account', exact :true }).click();
  14 | 
  15 | await page.waitForTimeout(1500);
  16 | 
  17 | });
```