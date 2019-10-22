import {
  After,
  AfterAll,
  Before,
  setDefaultTimeout,
  Status,
} from 'cucumber';
import { browser } from 'protractor';

setDefaultTimeout(30 * 1000);

Before({}, async () => {
  await browser.waitForAngularEnabled(true);
});

After(async function(scenario) {
  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');
  }
});

AfterAll({}, async () => {
  await browser.quit();
});
