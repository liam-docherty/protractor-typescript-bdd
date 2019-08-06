# protractor-typescript-bdd
## Project Description
// TODO

## Pre-Requisites
In order to clone the project and run the tests you will need the following applications installed:
* [NodeJS](https://nodejs.org/en/download/)

* An IDE e.g. [Visual Studio Code](https://code.visualstudio.com/)

* [Git](https://git-scm.com/downloads)

* [JavaJDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html)

## Cloning Project
Run the following command in the terminal to clone/download the project from the Git repository:<br>
`git clone https://github.com/liam-docherty/protractor-typescript-bdd.git`

## Running Tests
In order to see the tests running you must run the following commands in the terminal:
* `npm install`<br>Installs all of the project dependencies, generating the node_modules folder

* `npm run build`<br>Compiles all Typescript files into JavaScript

* `npm run webdriver-update`<br>Downloads the selenium server jar and browser drivers

* `npm run webdriver-start`<br>Starts running selenium server standalone

In a new terminal then run either of the test scripts, depending on whether you want to run the **Jasmine** or **Cucumber** tests. Either:
* `npm run test-jasmine`

* `npm run test-cucumber`

## BDD Notes
// TODO

## Page Object Model
// TODO

## Jasmine - Spec & Flow Notes
// TODO General <br>
// TODO Flow example: what if login changes from a simple username, password component to a multiple page process e.g. captcha on page 2

## Protractor Config
// TODO

## Pre-Push
// TODO: Run both sets of tests and lint

## Creating the Project
// TODO: Needs tidied up<br>
Referring to
* https://docs.npmjs.com/creating-a-package-json-file
* https://docs.npmjs.com/creating-node-js-modules<p>
`npm init` then follow the command line questionaire or use `npm init --yes` to create a default package.json file<p>

### Dependencies
Referring to https://scotch.io/tutorials/setting-up-a-node-project-with-typescript<p>
* `npm install typescript --save-dev`<br>
* `npm install tslint --save-dev`<br>
* `npm install protractor --save-dev`<br>
* `npm install @types/node --save-dev`<br> --'os' in config
* `npm install --ts-node --save-dev`<br>
* `npm install ghooks --save-dev`<br>

#### Jasmine Specific
* `npm install jasmine --save-dev`<br>
* `npm install @types/jasmine --save-dev`<br>
* `npm install protractor-jasmine2-screenshot-reporter --save-dev`<br>
* `npm install jasmine-spec-reporter --save-dev`<br>

#### Cucumber Specific
* `npm install protractor-cucumber-framework --save-dev`<br>
* `npm install cucumber --save-dev`<br>
* `npm install @types/cucumber --save-dev`<br>
* `npm install chai --save-dev`<br>
* `npm install @types/chai --save-dev`<br>
* `npm install protractor-multiple-cucumber-html-reporter-plugin --save-dev`<br>

Manually create a file at the root of the project tsconfig.json - referring to https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

`./node_modules/.bin/tslint --init` to create tslint file

Explain .gitignore file

## Example of Refactoring Benefits
Initial creation of test that does not consider Don't Repeat Yourself principles:
````
it('should display the Login page after successfully completing registration', async () => {
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
````
Below is the same test re-written by introducing the Page Object Model and a variable to hold the name, username and password of the user:
````
it('should display the Login page after successfully completing registration', async () => {
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
````
By using the POM the following improvements are made:
* Removes the identification of the elements of each step. This means that if the element identifier changes, this change is only required once across all tests
* Makes the test easier to read, `registration.enterFirstName(testUser1.firstName)` is easier to read than `element(by.id('firstName')).sendKeys('Test');`

Then finally is the same test from e2e/jasmine/registration.spec.ts file:
````
it('should display the Login page after successfully completing registration', async () => {
    await flow.goToRegistration();
    await flow.completeRegistration(testUser1);
    await flow.confirmRedirectToLogin();
  });
````
By applying the Flow approach (described above):
* Makes the test easier to read by describing behaviour in a BDD fashion as you should with Gherkin. 
* Means that if there is a change to a flow, it can be made once and applied to all tests. Two examples might be:
    * Registration becomes a multiple page process, and completing registration is a pre-requisite to many tests
    * There are multiple tests that will redirect the user to the Login page but we want to re-use the same set of assertions