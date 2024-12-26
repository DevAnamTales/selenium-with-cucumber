import { When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';
import {clickButton, getTextFromDescription} from '../step-definitions/common/common.js'

When('I wait until the event {string} occurs', async function (event_message) {
  let eventFound = false;
  while (!eventFound) {
    await clickButton('Wait');
    try {
      await this.driver.wait(
        until.elementLocated(By.xpath(
          `//p[contains(@class, 'description') and contains(text(), "${event_message}")]`)),
        1000
      );
      eventFound = true;
      console.log("The event found:", event_message);
    } catch (error) {
      console.log("The event has not been detected yet, we continue to wait...");
    }
  }
});

Then('the event {string} should be initialized', async function (event_message) {
  const eventText = await this.driver.findElement(
    By.xpath(`//p[contains(@class, 'description') and contains(text(), "${event_message}")]`)
  );

  const isDisplayed = await eventText.isDisplayed();
  expect(isDisplayed).to.be.true;
});

Then('I should see the text includes the {string}', async function (event_text) {
  // Get the tex from element
  const elementText = await getTextFromDescription();
  expect(elementText).includes(event_text);
});