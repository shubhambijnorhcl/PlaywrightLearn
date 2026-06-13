# Learning Playwright Testing Academy

Repository: https://github.com/shubhambijnorhcl/PlaywrightLearn

A learning repository for JavaScript concepts, asynchronous programming examples, and Playwright browser automation practice.

## Description
- **Purpose:** Collect practical JavaScript examples and Playwright tests for learning and experimentation.
- **Languages:** JavaScript and TypeScript.
- **Topics covered:** callbacks, promises, async/await, DOM workflows, and Playwright automation.

## Prerequisites
- Node.js installed (v14+ recommended).
- `npm` available.

## Install
Install dependencies:

```
npm install
```

## Run Tests
Run the full Playwright test suite:

```
npx playwright test
```

Run a specific test file:

```
npx playwright test tests/google.spec.js
```

Run tests in headed mode:

```
npx playwright test --headed
```

View the HTML report:

```
npx playwright show-report
```

Or open `playwright-report/index.html` in your browser.

## Project Structure
- `CallBack_fn/`: callback examples and callback-hell scenarios.
- `Chapter_01_Basics/`: foundational JavaScript examples and exercises.
- `Javascript_Basics/`: JavaScript functions, arrays, and practice problems.
- `Javascript_Concept/`: core JS concepts like `var`, `let`, `const`, and hoisting.
- `Promises/`: promise examples and asynchronous programming practice.
- `Playwright/`: Playwright example program in TypeScript.
- `tests/`: Playwright test specs and seed test files.
- `playwright-report/`: generated Playwright reports.

## Useful Commands
- Run a single test by title:

```
npx playwright test -g "test name"
```

- Run Playwright in headed mode:

```
npx playwright test --headed
```

## Contributing
Feel free to add examples, tests, or improvements. Open a PR with a short description of your changes.

## License
This repository has no license specified. Add a `LICENSE` file if you want to make one explicit.
