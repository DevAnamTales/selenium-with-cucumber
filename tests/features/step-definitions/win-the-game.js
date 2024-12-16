import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
// import { By, until, Key } from 'selenium-webdriver';
Given('that I have started the game by navigating to {string}', async function (url) {
  await this.driver.get(url);
  // Important: wait for the relevant DOM element(s) to exist
  // - we should choose to wait for an element we expect to only be in the DOM
  //   with correct content/text to verify that the app has fully loaded
  await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]');
});

// Note: This step checks both health, money and consumed espresso shots....
Then('the value of my {string} should be {float}', async function (statusType, expectedNumValue) {
  // Translate statusType (Health, Money, Espressos) to cssSelector (.health, .money., .espressoCups)
  let cssSelector = '.' + statusType.toLowerCase();
  if (cssSelector === '.espressos') { cssSelector = '.espressocups'; }
  // Convert the selector so it only grabs the child element .progress
  cssSelector += ' .progress';
  // Grab the element and the text inside it and conver to a number (using +)
  let element = await this.get(cssSelector);
  let numValue = +(await element.getText());
  // Check world the value is correct
  expect(numValue).to.equal(expectedNumValue);
});

Then('my hipster bag should contain {string}', async function (expectedBagContent) {
  // Get the element with the bag content
  let bagElement = await this.get('.bag-content');
  // Get the text and trim from spaces at beginning and end
  let bagContent = (await bagElement.getText()).trim();
  // Check the bag content is correct
  expect(bagContent).to.equal(expectedBagContent);
});

Given('my position is {string}', async function (position) {
  this.position = position;
  console.log(`Setting position to: ${this.position}`);

  // If the position is "Inside the cafe," click "Enter the cafe" option
  if (this.position === "Inside the cafe") {
    const menuItems = await this.getMany('.choices ul li');
    let itemFound = false;

    for (const menuItem of menuItems) {
      const text = await menuItem.getText();
      if (text === "Enter the cafe") {
        await menuItem.click();
        itemFound = true;
        console.log("Clicked on 'Enter the cafe'");
        break;
      }
    }

    if (!itemFound) {
      throw new Error(`Menu option "Enter the cafe" not found`);
    }
  }
});

Given('I make the choice to {string}', async function (choice) {
  // Locate all menu items within the menu
  const menuItems = await this.getMany('.choices ul li');

  let itemFound = false;

  // Iterate over the menu items to find the one matching the choice
  for (const menuItem of menuItems) {
    const text = await menuItem.getText();
    if (text === choice) {
      await menuItem.click();
      itemFound = true;
      console.log(`Selected the option: "${choice}"`);
      break;
    }
  }

  // Handle case where the option is not found
  if (!itemFound) {
    throw new Error(`Menu option "${choice}" not found`);
  }
});

Then('my position should be {string}', async function (a) {
  // TODO: implement step
});

Given('I know my current health', async function () {
  const healthElement = await this.get('.health .progress .good .val');

  // Retrieve the text content, which is the health value
  this.currentHealth = parseInt(await healthElement.getText(), 10);
  console.log(`Current health is: ${this.currentHealth}`);
});

When('I wait for the event {string} to take place', async function (a) {
  // TODO: implement step
});

Then('my health should be {string}', async function (a) {
  expect(this.currentHealth).to.not.be.undefined;

  // Locate and retrieve the updated health value
  const updatedHealthElement = await this.get('.health .progress .good .val');
  const updatedHealth = parseInt(await updatedHealthElement.getText(), 10);

  // Assert that updated health is 10 points more than the initial health
  expect(updatedHealth).to.equal(this.currentHealth + 10, `Expected health to increase by 10, but it was ${updatedHealth - this.currentHealth}`);
  console.log(`Health increased correctly by 10 points: Initial: ${this.currentHealth}, Updated: ${updatedHealth}`);
  this.currentHealth = updatedHealth; // Update to the latest health value

});
Given('that I know my current menu choices', async function () {
  // TODO: implement step
});

Then('I should be given the new choice {string}', async function (a) {
  // TODO: implement step
});