# DecemberLabsDemo
Prototype project for testing purpose. This is a Cypress testing project utilizing Page Object Model (POM) and Mochawesome as the reporter.

## Installation
To install the project's dependencies, you first need to have Node.js and npm installed on your machine. Then, you can clone this repository and run the following command at the root of the project:

```bash
npm install
```
This will install Cypress, Mochawesome, and any other necessary dependencies for this project.

## Running Tests
To run the tests, you can use the following command:

```bash
npm run test
```
This will open the Cypress UI, where you can select specific tests to run, or you can run all tests at once.

or If you want to run the tests in headless mode (without a UI), you can use the following command:
```bash
npm run test:headless
```

## Report Generation
### Mochawesome
This project uses Mochawesome to generate test reports. After running the tests, a report will be generated in the cypress/reports/html directory. You can open the index.html file in your browser to view the report.

## Upgrades
There are several ways to upgrade this project to enhance its testing capabilities:

### Cucumber
Cucumber is a tool that supports Behavior-Driven Development (BDD). It allows to write tests in a natural language that is readable by non-technical stakeholders, while still being able to be executed as automated tests. It can be integrated into this project to allow for a BDD approach to testing.



