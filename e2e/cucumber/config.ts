import { platform } from 'os';
import { browser, Config } from 'protractor';

// TODO: Need to add reporter
let chromeArgs = ['--no-sandbox'];
if (platform() !== 'win32') {
  chromeArgs = [...chromeArgs,
    // '--headless',
    '--disable-gpu',
    '--window-size=1920x1080'];
}

export const config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['../../../e2e/cucumber/steps/*.steps.ts'],
  },
  specs: ['../../../e2e/cucumber/features/*.feature'],
  allScriptsTimeout: 11000,
  baseUrl: 'http://www.globalsqa.com/angularJs-protractor/',
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: chromeArgs,
    },
    shardTestFiles: true,
    maxInstances: 4,
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, '../../../e2e/tsconfig.e2e.json'),
    });
    browser.manage().window().maximize();
  },
};
