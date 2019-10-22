import {
  by,
  element,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';

export class Landing {
  private heading: ElementFinder = element(by.tagName('h1'));
  private headingParagraph: ElementFinder = element(by.xpath('/html/body/div[1]/div/div/div/p[1]'));
  private subHeading: ElementFinder = element(by.tagName('h3'));
  private registeredUsers: ElementArrayFinder = element.all(by.xpath('/html/body/div[1]/div/div/div/ul/li'));
  private logoutButton: ElementFinder = element(by.className('btn-primary'));

  public async getHeadingText(): Promise<string> {
    return await this.heading.getText();
  }

  public async getHeadingParagraphText(): Promise<string> {
    return await this.headingParagraph.getText();
  }

  public async getSubHeadingText(): Promise<string> {
    return await this.subHeading.getText();
  }

  public async countRegisteredUsers(): Promise<number> {
    return await this.registeredUsers.count();
  }

  public async getUserText(rowIndex: number): Promise<string> {
    return await this.registeredUsers.get(rowIndex).getText();
  }

  public async getLogoutButtonText(): Promise<string> {
    return await this.logoutButton.getText();
  }

  public async clickLogoutButton(): Promise<void> {
    await this.logoutButton.click();
  }
}
