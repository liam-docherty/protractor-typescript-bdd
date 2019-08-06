import { browser, by, element } from 'protractor';
import { testUser1 } from '../../support/constants/users';
import { RegistrationFlow } from '../flows/registration.flow';

const flow: RegistrationFlow = new RegistrationFlow();

describe('Registration >', () => {
  it('should redirect to Login after successfully completing registration', async () => {
    await flow.goToRegistration();
    await flow.completeRegistration(testUser1);
    await flow.confirmRedirectToLogin();
  });

  it('should disable Register until all fields are completed', async () => {
    await browser.get('registration-login-example/#/register');
    await element(by.id('firstName')).sendKeys('Test');
    await element(by.id('Text1')).sendKeys('User');
    await element(by.id('username')).sendKeys('TestUser');
    await element(by.className('form-actions')).element(by.css('.btn-primary')).isEnabled()
      .then(isEnabled => expect(isEnabled).toBe(false));
  });

  it('should login successfully', async () => {
    await browser.get('registration-login-example/#/login');
    await element(by.id('username')).sendKeys('TestUser');
    await element(by.id('password')).sendKeys('Password1');
    await element(by.className('btn-primary')).click();
    browser.sleep(5000);
  });
});