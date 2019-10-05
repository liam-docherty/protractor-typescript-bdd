import { CustomerAccountPage } from '../../../page-objects/banking/customer-account-page.po';
import { Account } from '../support/interfaces/account';
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

  public async confirmFirstAccountIsSelectedByDefault(user: User) {
    expect(await account.content.accountSelect.getCurrentOptionText()).toEqual(user.accounts[0].number.toString());

  }

  public async confirmFirstAccountDetailsAreDisplayed(user: User) {
    const userAccount: Account = user.accounts[0];
    // TODO: We should add a starting balance property to the account interface
    expect(await account.content.getAccountDetailsText()).toEqual(
      `Account Number : ${ userAccount.number.toString() } , Balance : 0 , Currency : ${ userAccount.currency }`,
    );
  }

}
