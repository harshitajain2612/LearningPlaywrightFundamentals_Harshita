# Learning Playwright Fundamentals

A learning repository for mastering Playwright testing fundamentals with TypeScript.

## 📋 Project Overview

This project contains a series of test examples and labs demonstrating core Playwright testing concepts including:
- Basic testing setup and configuration
- Test annotations and metadata
- Browser automation
- Web element interaction
- Test assertions and validations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running Tests

```bash
npx playwright test
```

### Running Specific Test

```bash
npx playwright test tests/01_Basics/Lab209.spec.ts
```

### Viewing Test Reports

```bash
npx playwright show-report
```

## 📁 Project Structure

```
├── tests/
│   ├── 01_Basics/
│   │   ├── Lab209.spec.ts
│   │   └── Lab210_Test_Annotation.spec.ts
│   ├── 02_first_tests/
│   │   ├── 211_First_Running_Test.ts
│   │   ├── 212_Browser_Context_Pages.spec.ts
│   │   ├── 213_MultipleContext.spec.ts
│   │   ├── 214_Multiple_Pages(Tabs).spec.ts
│   │   ├── 215_TEST_PW.spec.ts
│   │   ├── 216_Manual_Context.spec.ts
│   │   ├── 217_Manual_Context_Options.spec.ts
│   │   └── 218_Context_Reuse.spec.ts
│   ├── 03_Locators_Commands/
│   │   ├── 219_Commands.spec.ts
│   │   ├── 220_GotoCommands.spec.ts
│   │   ├── 221_Reffer_Command.spec.ts
│   │   ├── 222_Automation.vwo.com.spec.ts
│   │   ├── 223_Xpath.spec.ts
│   │   ├── 224_GetRole.spec.ts
│   │   ├── 225_CSS_Locators.spec.ts
│   │   ├── 226_PressSequentially.spec.ts
│   │   ├── 227_Cookie.spec.ts
│   │   └── index.html
│   ├── 04_Session_Storage/
│   │   ├── 228_Session.spec.ts
│   │   └── 229.TestVWo.spec.ts
│   ├── 05_Allure_Reporting/
│   │   └── 230_Login.spec.ts
│   └── Tasks/
│       └── VwoFreeTrial.spec.ts
├── allure-results/
├── playwright-report/
├── test-results/
├── playwright.config.ts
├── package.json
└── README.md
```

## 📚 Test Files

### 01_Basics
- **Lab209.spec.ts** - Basic Playwright testing examples
- **Lab210_Test_Annotation.spec.ts** - Test annotations and metadata examples

### 02_first_tests
- **211_First_Running_Test.ts** - First running test example
- **212_Browser_Context_Pages.spec.ts** - Browser context and page management
- **213_MultipleContext.spec.ts** - Multiple context handling
- **214_Multiple_Pages(Tabs).spec.ts** - Managing multiple pages/tabs
- **215_TEST_PW.spec.ts** - Playwright test examples
- **216_Manual_Context.spec.ts** - Manual context creation
- **217_Manual_Context_Options.spec.ts** - Context options configuration
- **218_Context_Reuse.spec.ts** - Context reuse patterns

### 03_Locators_Commands
- **219_Commands.spec.ts** - Basic Playwright commands
- **220_GotoCommands.spec.ts** - Navigation commands
- **221_Reffer_Command.spec.ts** - Referrer command examples
- **222_Automation.vwo.com.spec.ts** - VWO website automation
- **223_Xpath.spec.ts** - XPath locator strategies
- **224_GetRole.spec.ts** - Role-based locators
- **225_CSS_Locators.spec.ts** - CSS selector strategies
- **226_PressSequentially.spec.ts** - Sequential keyboard input
- **227_Cookie.spec.ts** - Cookie management

### 04_Session_Storage
- **228_Session.spec.ts** - Session storage handling
- **229.TestVWo.spec.ts** - VWO session storage tests

### 05_Allure_Reporting
- **230_Login.spec.ts** - Login automation with Allure reporting

### Tasks
- **VwoFreeTrial.spec.ts** - Real-world VWO free trial automation task

## 🛠️ Configuration

Playwright configuration is defined in `playwright.config.ts`. Key settings include:
- Test timeout settings
- Browser types and launch options
- Report generation options
- Allure reporter integration

## 📊 Reports

### Playwright Reports
Test reports are generated in the `playwright-report/` directory after test execution. View reports using:

```bash
npx playwright show-report
```

### Allure Reports
Allure test reports are generated in the `allure-results/` directory. View Allure reports using:

```bash
allure serve allure-results
```

## 🎯 Learning Topics Covered

- ✅ Browser and Page Management
- ✅ Context and Session Handling
- ✅ Web Element Locators (CSS, XPath, Role-based)
- ✅ User Interactions (Clicks, Input, Press Keys)
- ✅ Navigation and Page References
- ✅ Cookies and Session Storage
- ✅ Test Annotations and Metadata
- ✅ Allure Reporting Integration

```bash
npx playwright show-report
```

## 🤝 Contributing

Feel free to extend this project with additional test examples and learning materials.

## 📝 License

This project is licensed under the ISC License.

---

**Happy Testing! 🎭**
