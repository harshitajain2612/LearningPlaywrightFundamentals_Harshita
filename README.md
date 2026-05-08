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
│   └── Tasks/
│       └── AutomateCura.spec.ts
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
- Additional locator and command examples (directory available for expansion)

### Tasks
- **AutomateCura.spec.ts** - Real-world automation task example

## 🛠️ Configuration

Playwright configuration is defined in `playwright.config.ts`. Key settings include:
- Test timeout settings
- Browser types and launch options
- Report generation options

## 📊 Reports

Test reports are generated in the `playwright-report/` directory after test execution. View reports using:

```bash
npx playwright show-report
```

## 🤝 Contributing

Feel free to extend this project with additional test examples and learning materials.

## 📝 License

This project is licensed under the ISC License.

---

**Happy Testing! 🎭**
