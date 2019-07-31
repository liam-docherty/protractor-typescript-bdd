import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('I am on the home page', async () => {
  await browser.get('');
});
