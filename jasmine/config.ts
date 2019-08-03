import { Promise } from 'es6-promise';
import { SpecReporter } from 'jasmine-spec-reporter';
import { platform } from 'os';
import { browser, Config } from 'protractor';

// tslint:disable-next-line: no-var-requires
const htmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const specReporter = new SpecReporter({
  spec: {
    displayStacktrace: true,
  },
});

const htmlReporter = new htmlScreenshotReporter({
  dest: './jasmine/reports',
  filename: 'report.html',
  cleanDestination: true,
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true,
  reportTitle: 'Jasmine Example Test Results',
  showSummary: true,
  showConfiguration: true,
});

let chromeArgs = ['--no-sandbox'];
if (platform() !== 'win32') {
  chromeArgs = [...chromeArgs,
    // '--headless',
    '--disable-gpu',
    '--window-size=1920x1080'];
}

export const config: Config = {
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 80000,
    showColors: true,
    // tslint:disable-next-line: no-empty
    print: () => { },
  },
  allScriptsTimeout: 11000,
  baseUrl: 'http://www.globalsqa.com/angularJs-protractor/',
  directConnect: true,
  specs: [
    '../../jasmine/specs/*.spec.ts',
  ],
  exclude: [],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: chromeArgs,
    },
    shardTestFiles: true,
    maxInstances: 4,
  },
  beforeLaunch() {
    return new Promise(resolve => {
      htmlReporter.beforeLaunch(resolve);
    });
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, '../../jasmine/tsconfig.e2e.json'),
      // project: '../tsconfig.json',
    });
    jasmine.getEnv().addReporter(specReporter);
    jasmine.getEnv().addReporter(htmlReporter);
    browser.manage().window().maximize();
  },
  afterLaunch(exitCode) {
    return new Promise(resolve => {
      htmlReporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
};
