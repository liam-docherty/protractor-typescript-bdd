import { by, element, ElementFinder } from 'protractor';

export class Login {
  private successAlert: ElementFinder = element(by.className('alert-success'));

  async getSuccessAlertText(): Promise<string> {
    return await this.successAlert.getText();
  }
}
