# Selenium with Cucumber workshop

In this workshop I tested Espresso Addict, a small text-based adventure game, using Selenium and Cucumber with a BDD approach. The workshop emphasized black-box testing, focusing solely on the browser interface to interact with the game's DOM elements without examining the internal game code.

* Run **npm install** once.
* Run the tests/feature-files with **npm test**.

## How to Install the Project and Run Tests

### 1. Clone the Repository:
```bash
git clone <your-repository-url>
```
### 2. Install Dependencies:
Ensure you have Node.js installed, then install the required packages.
```bash
npm install
```

### 3. Run the Game:
To start the Espresso Addict game locally:
```bash
npm start
```

### 4. Run Tests:
To run all Cucumber/BDD tests, execute:
```bash
npm test
```
### 5. Run Specific feature:
To run a specific Cucumber/BDD test, execute:

```bash
npx cucumber-js tests/features/NAME_of_FILE.feature
```


### 6. Generate Test Reports:
To generate a test report after running the tests, use:

```bash
npm run report
```