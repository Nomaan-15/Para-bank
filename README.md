# Parabank Automation Testing

This repository contains automated tests for Parabank, a fictional online banking application. The tests are implemented using [Selenium](https://www.selenium.dev/) and [TestNG](https://testng.org/doc/).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- 

## Prerequisites

Before you begin, ensure you have the following installed:

Node.js (>=12.x)
npm (comes with Node.js)
parabank instance for testing

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/parabank-automation.git
Install dependencies cd opencart-automation npm install

2.Project Structure cypress/: Contains Cypress tests, fixtures, and support files. cypress/e2e/: Place your test files here. cypress/fixtures/: Store your test data in JSON files. cypress/support/: Add custom commands or global configuration. cypress.json: Cypress configuration file. package.json: Node.js project configuration.

3.Running Tests Run the tests using the Cypress Test Runner: npx cypress run
