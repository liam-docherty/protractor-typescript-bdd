import { expect } from 'chai';
import {
  Given,
  Then,
  When,
} from 'cucumber';
import { browser } from 'protractor';
import { Login } from '../../page-objects/login.po';
import { Registration } from '../../page-objects/registration.po';
import { testUser1 } from '../../support/constants/users';
import { config } from '../config';

const registration: Registration = new Registration();
const login: Login = new Login();

Given(/^the user is on the registration page$/, async () => {
  await browser.get('registration-login-example/#/register');
});

When(/^the user successfully completes registration$/, async () => {
  await registration.completeRegistrationForm(testUser1);
});

Then(/^the user should be redirected to the login page$/, async () => {
  expect(await browser.getCurrentUrl())
    .to.equal(`${config.baseUrl}registration-login-example/#/login`);
  expect(await login.getSuccessAlertText()).to.equal('Registration successful');
});
