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
// TODO

## Protractor Config
// TODO

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