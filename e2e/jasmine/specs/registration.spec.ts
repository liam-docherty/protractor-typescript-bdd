import {
  browser,
  by,
  element
} from 'protractor';
import { testUser1 } from '../../support/constants/users';
import { RegistrationFlow } from '../flows/registration.flow';

const flow: RegistrationFlow = new RegistrationFlow();

describe('Registration >', () => {
  it('should display the Login page after successfully completing registration', async () => {
    await flow.goToRegistration();
    await flow.completeRegistration(testUser1);
    await flow.confirmRedirectToLoginPage();
  });

  it('should disable Register until all fields are completed', async () => {
    await browser.get('registration-login-example/#/register');
    await element(by.id('firstName')).sendKeys('Test');
    await element(by.id('Text1')).sendKeys('User');
    await element(by.id('username')).sendKeys('TestUser');
    await element(by.className('form-actions')).element(by.css('.btn-primary')).isEnabled()
      .then(isEnabled => expect(isEnabled).toBe(false));
  });
});
