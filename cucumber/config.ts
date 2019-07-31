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
    require: ['../../cucumber/steps/*.steps.ts'],
  },
  specs: ['../../cucumber/features/*.feature'],
  allScriptsTimeout: 11000,
  baseUrl: 'https://angular.io/',
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
      // TODO: Reusing jasmine, should be moved to common location
      project: require('path').join(__dirname, '../../jasmine/tsconfig.e2e.json'),
      // project: '../tsconfig.json',
    });
    browser.manage().window().maximize();
  },
};
