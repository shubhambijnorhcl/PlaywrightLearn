# Learning Playwright Testing Academy

Repository: https://github.com/shubhambijnorhcl/PlaywrightLearn

A small collection of JavaScript examples and Playwright tests used for learning and experimentation.

**Description**
- **Purpose:** Hands-on examples for JavaScript fundamentals and Playwright test practice.
- **Languages:** JavaScript (some TypeScript in `tests/`), Playwright for browser automation.

**Prerequisites**
- **Node.js:** Install Node.js (v14+ recommended).
- **Package manager:** `npm` is used for dependencies.

**Install**
- Install dependencies:

```
npm install
```

**Run Tests**
- Run the Playwright test suite:

```
npx playwright test
```

- Run a single test file (example):

```
npx playwright test tests/google.spec.js
```

- View the HTML report:

```
npx playwright show-report
# or open the file at playwright-report/index.html in your browser
```

**Project Structure (high level)**
- **`CallBack_fn/`**: Callback function examples.
- **`Chapter_01_Basics/`**: Basic JS exercises and examples.
- **`Javascript_Basics/`**, **`Javascript_Concept/`**, **`Arrays/`**: Learning snippets and practice problems.
- **`Playwright/`**: Playwright TypeScript example program.
- **`tests/`**: Playwright test specs (e.g., `google.spec.js`, `seed.spec.ts`).
- **`playwright-report/`**: Generated test reports.

**Useful Commands**
- Run a single test by name:

```
npx playwright test -g "test name"
```

- Run tests headed (with a visible browser):

```
npx playwright test --headed
```

**Contributing**
- Feel free to add examples, tests, or improvements. Open a PR with a short description of changes.

**License**
- This repository has no license specified. Add a `LICENSE` file if you want to make one explicit.

---

If you want, I can also: add a `package.json` script for running Playwright, convert some examples to TypeScript, or generate a simple CONTRIBUTING.md.
