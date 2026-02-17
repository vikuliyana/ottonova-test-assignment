# Ottonova Test Assignment

This repository contains automated tests for the Ottonova Digital Assistant and PokeAPI, implemented using Cypress.

## Project Structure

The project follows the standard Cypress directory structure and uses the Page Object Model (POM) design pattern.

- **`cypress/e2e/ui`**: Contains UI tests for the Ottonova Digital Assistant (`/online-beitragsrechner`).
- **`cypress/e2e/api`**: Contains API tests for PokeAPI (verifying response data and mocking).
- **`cypress/support/page_objects`**: Page Object files (e.g., `assistantPage.js`) encapsulating selectors and actions.
- **`cypress/fixtures`**: Static test data (e.g., `user_data.json`).

## Prerequisites

- Node.js (Latest stable version recommended)
- npm

## Installation

1. Navigate to the project directory:
   ```bash
   cd ottonova-test-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

You can run tests using the scripts defined in `package.json`.

| Script | Description |
| :--- | :--- |
| `npm run cy:open:e2e` | Opens the Cypress Test Runner for interactive testing. |
| `npm run cy:chrome:ui` | Runs UI tests in Chrome browser only. |
| `npm run cy:firefox:ui` | Runs UI tests in Firefox browser only. |
| `npm run cy:api` | Runs API tests only. |


## Features

- **Cross-Browser Cookie Handling**: The project implements a robust cookie acceptance mechanism in `assistantPage.js` that handles timing differences across browsers (Chrome, Firefox) by waiting for the banner to be visible before interacting.
- **Page Object Model**: UI interactions are abstracted into Page Objects to improve code readability and maintainability.
- **API Testing**: Includes tests for `GET` requests and mocking responses using `cy.intercept`.

## Configuration

The Cypress configuration is located in `cypress.config.js`. You can modify `baseUrl` or other settings there.

```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.ottonova.de",
    includeShadowDom: true,
    // ...
  },
});
```
