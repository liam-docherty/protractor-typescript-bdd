import { browser, by, element } from 'protractor';
import { Login } from '../../page-objects/login.po';
import { Registration } from '../../page-objects/registration.po';
import { testUser1 } from '../../support/constants/users';
import { RegistrationFlow } from '../flows/registration.flow';

const login: Login = new Login();
const registration: Registration = new Registration();
const flow: RegistrationFlow = new RegistrationFlow();

describe('Login >', () => {
  xit('should register successfully v1', async () => {
    await browser.get('registration-login-example/#/register');
    await element(by.id('firstName')).sendKeys('Test');
    await element(by.id('Text1')).sendKeys('User');
    await element(by.id('username')).sendKeys('TestUser');
    await element(by.id('password')).sendKeys('Password1');
    await element(by.className('form-actions')).element(by.css('.btn-primary')).click();
    await browser.getCurrentUrl().then(url => expect(url)
      .toEqual('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login'));
    await element(by.className('alert-success')).getText().then(text => expect(text)
      .toEqual('Registration successful'));
  });

  xit('should register successfully v2 - with page objects', async () => {
    await browser.get('registration-login-example/#/register');
    await registration.enterFirstName(testUser1.firstName);
    await registration.enterLastName(testUser1.lastName);
    await registration.enterUsername(testUser1.username);
    await registration.enterPassword(testUser1.password);
    await registration.clickRegisterButton();
    await browser.getCurrentUrl().then(url => expect(url)
      .toEqual('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login'));
    await login.getSuccessAlertText().then(text => expect(text).toEqual('Registration successful'));
  });

  xit('should register successfully v3', async () => {
    await browser.get('registration-login-example/#/register');
    await registration.completeRegistrationForm({
      firstName: testUser1.firstName,
      lastName: testUser1.lastName,
      username: testUser1.username,
      password: testUser1.password,
    });
    await browser.getCurrentUrl().then(url => expect(url)
      .toEqual('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login'));
    await login.getSuccessAlertText().then(text => expect(text).toEqual('Registration successful'));
  });

  xit('should register successfully v4', async () => {
    await browser.get('registration-login-example/#/register');
    await flow.completeRegistration({
      firstName: testUser1.firstName,
      lastName: testUser1.lastName,
      username: testUser1.username,
      password: testUser1.password,
    });
    await browser.getCurrentUrl().then(url => expect(url)
      .toEqual('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login'));
    await login.getSuccessAlertText().then(text => expect(text).toEqual('Registration successful'));
  });

  // TODO: Rework to pass in user instead of the 4 properties
  it('should register successfully v5', async () => {
    await flow.goToRegistration();
    await flow.completeRegistration({
      firstName: testUser1.firstName,
      lastName: testUser1.lastName,
      username: testUser1.username,
      password: testUser1.password,
    });
    await flow.confirmTheUserIsRedirectedToLogin();
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
