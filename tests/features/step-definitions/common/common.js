import { By, until } from 'selenium-webdriver';
import { driver } from '../../support/world.js';
import { When, Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

//import startLocation from '../../step-definitions/common/location.js'

async function clickButton(buttonText) {
  const button = await driver.wait(
    until.elementLocated(By.xpath(
      `//menu[@class='choices']//li[text()='${buttonText}']`)),
    10000
  );
  await driver.wait(
    until.elementIsVisible(button),
    10000
  );
  await button.click();
  await driver.sleep(1000); // Wait for 1 second

}
async function getTextFromDescription() {
  const event = await driver.findElement(By.xpath("//main/p[contains(@class, 'description')]"),
    10000
  );
  await driver.wait(until.elementIsVisible(event), 10000);

  const text = await event.getText();
  console.log("Text inside the description element:", text);

  return text;
}
/* Given('the value of my {string} should be {float}', async function (sectionName, expectedValue) {
  const actualValue = await getValueOfScores(sectionName);

  expect(actualValue).to.equal(expectedValue,
    `Expected ${sectionName} to be ${expectedValue}, but got ${actualValue}`
  );
}); */

When('I buy {float} espressos', async function (number) {
  for (let i = 0; i < number; i++) {
    const button = await this.driver.wait(
      until.elementLocated(By.xpath(
        `//menu[@class='choices']//li[text()='Buy an espresso']`)),
      10000);
    const isDisplayed = await button.isDisplayed();
    if (isDisplayed) {
      await button.click();
    } else {
      throw new Error(`Button 'Buy an espresso' is not displayed.`);
    }
  }
});

Given('the game should end with the message {string}', async function (expectedMessage) {
  try {
    // Wait for the element containing the message
    const messageElement = await this.driver.wait(
      until.elementLocated(By.xpath(
        `//p[contains(@class, 'description') and contains(text(), "${expectedMessage}")]`)),
      5000 // Timeout: Wait up to 5 seconds
    );

    // Ensure the element is visible
    await this.driver.wait(until.elementIsVisible(messageElement), 2000);

    console.log('Game ended with the correct message:', expectedMessage);
  } catch (error) {
    console.error('Failed to verify the end message:', error);
    throw error;
  }
});

export {clickButton, getTextFromDescription}