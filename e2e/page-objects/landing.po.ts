import {
  by,
  element,
  ElementFinder,
} from 'protractor';

export class Landing {
  private heading: ElementFinder = element(by.tagName('h1'));
  private headingParagraph: ElementFinder;
  private subHeading: ElementFinder = element(by.tagName('h3'));
  private registeredUsers: ElementFinder;
  private logoutButton: ElementFinder;

  public async getHeadingText(): Promise<string> {
    return await this.heading.getText();
  }

  public async getHeadingParagraphText(): Promise<string> {
    return await this.headingParagraph.getText();
  }

  public async getSubHeadingText(): Promise<string> {
    return await this.subHeading.getText();
  }

  public async getLogoutButtonText(): Promise<string> {
    return await this.logoutButton.getText();
  }

  public async clickLogoutButton(): Promise<void> {
    await this.logoutButton.click();
  }
}
