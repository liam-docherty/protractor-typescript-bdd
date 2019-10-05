import { CustomerAccountPage } from '../../../page-objects/banking/customer-account-page.po';
import { User } from '../support/interfaces/user';
import { BaseFlow } from './base.flow';

const account: CustomerAccountPage = new CustomerAccountPage();

export class CustomerAccountFlow extends BaseFlow {

  constructor() {
    super(account);
  }

  public async confirmWelcomeMessageDetails(user: User) {
    expect(await account.content.getWelcomeMessageText()).toEqual(`Welcome ${ user.firstName } ${ user.lastName } !!`);
    expect(await account.content.getWelcomeMessageFontSize()).toEqual('14px');
    expect(await account.content.getCustomerNameFontSize()).toEqual('25px');
  }

}
