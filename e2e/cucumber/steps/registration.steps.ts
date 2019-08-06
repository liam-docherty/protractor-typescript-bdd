import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('I am on the registration page', async () => {
  await browser.get('registration-login-example/#/register');
});
