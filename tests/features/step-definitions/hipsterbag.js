import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { clickButton } from '../step-definitions/common/common.js';

Then('my hipster bag should contain {string}', async function (expectedBagContent) {
  // Get the element with the bag content
  let bagElement = await this.get('.bag-content');
  // Get the text and trim from spaces at beginning and end
  let bagContent = (await bagElement.getText()).trim();
  // Check the bag content is correct
  expect(bagContent).to.equal(expectedBagContent);
});