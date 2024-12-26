import { By, until } from 'selenium-webdriver';
import { When, Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Then('the value of my "Health" should be decreased', async function () {
  const cssSelector = '.health .progress'; // CSS selector for the health progress element

  try {
    // Locate the health element and get the current health value
    const healthElement = await this.driver.findElement(By.css(cssSelector));
    const currentHealth = parseInt(await healthElement.getText(), 10);

    // Ensure `this.currentHealth` is defined from a prior step
    if (typeof this.currentHealth === 'undefined') {
      throw new Error(
        '`this.currentHealth` is not set'
      );
    }

    // Verify that the current health is less than the previously recorded health
    expect(currentHealth).to.be.lessThan(
      this.currentHealth,
      `Expected Health to decrease from ${this.currentHealth}, but it is now ${currentHealth}`
    );

    // Update `this.currentHealth` to the new value for further checks
    this.currentHealth = currentHealth;
  } catch (error) {
    throw new Error(`Failed to verify Health decrease: ${error.message}`);
  }
});