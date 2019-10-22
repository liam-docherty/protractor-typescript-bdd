import { CustomerAccountPage } from '../../../page-objects/banking/customer-account-page.po';
import { Account } from '../support/interfaces/account';
import { User } from '../support/interfaces/user';
import { BaseFlow } from './base.flow';

const account: CustomerAccountPage = new CustomerAccountPage();

export class CustomerAccountFlow extends BaseFlow {

  constructor() {
    super(account);
  }

  public async selectDepositOption(): Promise<void> {
    await account.content.depositTabButton.click();
  }

  public async enterDepositAmount(amount: string): Promise<void> {
    await account.content.depositFormInput.enterText(amount);
  }

  public async selectDepositAmountConfirm(): Promise<void> {
    await account.content.depositFormButton.click();
  }

  public async selectWithdrawalOption(): Promise<void> {
    await account.content.withdrawalTabButton.click();
  }

  public async enterWithdrawalAmount(amount: string): Promise<void> {
    await account.content.withdrawalFormInput.enterText(amount);
  }

  public async selectWithdrawalAmountConfirm(): Promise<void> {
    await account.content.withdrawalFormButton.click();
  }

  public async confirmWelcomeMessageDetails(user: User): Promise<void> {
    expect(await account.content.getWelcomeMessageText()).toEqual(`Welcome ${ user.firstName } ${ user.lastName } !!`);
    expect(await account.content.getWelcomeMessageFontSize()).toEqual('14px');
    expect(await account.content.getCustomerNameFontSize()).toEqual('25px');
  }

  public async confirmFirstAccountIsSelectedByDefault(user: User): Promise<void> {
    expect(await account.content.accountSelect.getCurrentOptionText()).toEqual(user.accounts[0].number.toString());
  }

  public async confirmFirstAccountDetailsAreDisplayed(user: User): Promise<void> {
    await this.confirmSelectedAccountDetailsAreDisplayed(user, 0);
  }

  public async confirmAccountBalance(balance: string): Promise<void> {
    expect(await account.content.getAccountBalanceText()).toEqual(balance);
  }

  public async confirmSelectedAccountDetailsAreDisplayed(user: User, accountIndex: number): Promise<void> {
    const userAccount: Account = user.accounts[accountIndex];
    expect(await account.content.getAccountDetailsText()).toEqual(
      // tslint:disable-next-line:max-line-length
      `Account Number : ${ userAccount.number.toString() } , Balance : ${ userAccount.startingBalance } , Currency : ${ userAccount.currency }`);
  }

  public async confirmAccountListSelectOptions(user: User): Promise<void> {
    const count: number = user.accounts.length;
    expect(await account.content.accountSelect.getOptionsCount()).toEqual(count);
    for (let i: number = 0; i < count; i++) {
      expect(await account.content.accountSelect.getOptionTextByIndex(i)).toEqual(user.accounts[i].number.toString());
    }
  }

  public async confirmAccountActionsAreAvailable(): Promise<void> {
    expect(await account.content.getActionsCount()).toEqual(3);
    expect(await account.content.transactionsTabButton.getText()).toEqual('Transactions');
    expect(await account.content.depositTabButton.getText()).toEqual('Deposit');
    expect(await account.content.withdrawalTabButton.getText()).toEqual('Withdrawl');
  }

  public async confirmDepositAmountRequestIsNotDisplayed(): Promise<void> {
    expect(await account.content.depositFormInput.isLabelPresent()).toBe(false, 'Deposit form label is present');
    expect(await account.content.depositFormInput.isPresent()).toBe(false, 'Deposit form input is present');
    expect(await account.content.depositFormButton.isPresent()).toBe(false, 'Deposit form button is present');
  }

  public async confirmDepositAmountRequestIsDisplayed(): Promise<void> {
    expect(await account.content.depositFormInput.getLabelText()).toEqual('Amount to be Deposited :');
    expect(await account.content.depositFormInput.getPlaceholderText()).toEqual('amount');
    expect(await account.content.depositFormInput.getInputValue()).toEqual('');
    expect(await account.content.depositFormButton.getText()).toEqual('Deposit');
  }

  public async confirmDepositOptionIsNotHighlighted(): Promise<void> {
    expect(await account.content.depositTabButton.isSelected()).toBe(false, 'Deposit tab button is selected');
  }

  public async confirmDepositOptionIsHighlighted(): Promise<void> {
    expect(await account.content.depositTabButton.isSelected()).toBe(true, 'Deposit tab button is not selected');
  }

  public async confirmDepositAmountIsRequired(): Promise<void> {
    expect(await account.content.depositFormInput.isRequired()).toBe(true, 'Deposit amount is not required');
    expect(await account.content.depositFormInput.isInvalid()).toBe(true, 'Deposit amount is valid');
    expect(await account.content.depositFormInput.getValidationMessageText()).toEqual('Please fill in this field.');
    await this.confirmTransactionMessageIsNotDisplayed();
  }

  public async confirmDepositInputValue(amount: string): Promise<void> {
    expect(await account.content.depositFormInput.getInputValue()).toEqual(amount);
  }

  public async confirmDecimalDepositAmountIsRejected(): Promise<void> {
    const input: number = Number(await account.content.depositFormInput.getInputValue());
    const lower: number = Math.floor(input);
    const upper: number = Math.ceil(input);
    expect(await account.content.depositFormInput.getValidationMessageText())
      .toEqual(`Please enter a valid value. The two nearest valid values are ${ lower } and ${ upper }.`);
    await this.confirmTransactionMessageIsNotDisplayed();
  }

  public async confirmDepositSuccessMessageIsDisplayed(): Promise<void> {
    expect(await account.content.getTransactionMessageText()).toEqual('Deposit Successful');
  }

  public async confirmWithdrawalAmountRequestIsNotDisplayed(): Promise<void> {
    expect(await account.content.withdrawalFormInput.isLabelPresent()).toBe(false, 'Withdrawal form label is present');
    expect(await account.content.withdrawalFormInput.isPresent()).toBe(false, 'Withdrawal form input is present');
    expect(await account.content.withdrawalFormButton.isPresent()).toBe(false, 'Withdrawal form button is present');
  }

  public async confirmWithdrawalAmountRequestIsDisplayed(): Promise<void> {
    expect(await account.content.withdrawalFormInput.getLabelText()).toEqual('Amount to be Withdrawn :');
    expect(await account.content.withdrawalFormInput.getPlaceholderText()).toEqual('amount');
    expect(await account.content.withdrawalFormInput.getInputValue()).toEqual('');
    expect(await account.content.withdrawalFormButton.getText()).toEqual('Withdraw');
  }

  public async confirmWithdrawalOptionIsNotHighlighted(): Promise<void> {
    expect(await account.content.withdrawalTabButton.isSelected()).toBe(false, 'Withdrawal tab button is selected');
  }

  public async confirmWithdrawalOptionIsHighlighted(): Promise<void> {
    expect(await account.content.withdrawalTabButton.isSelected()).toBe(true, 'Withdrawal tab button is not selected');
  }

  public async confirmWithdrawalAmountIsRequired(): Promise<void> {
    expect(await account.content.withdrawalFormInput.isRequired()).toBe(true, 'Withdrawal amount is not required');
    expect(await account.content.withdrawalFormInput.isInvalid()).toBe(true, 'Withdrawal amount is valid');
    expect(await account.content.withdrawalFormInput.getValidationMessageText()).toEqual('Please fill in this field.');
    await this.confirmTransactionMessageIsNotDisplayed();
  }

  public async confirmWithdrawalInputValue(amount: string): Promise<void> {
    expect(await account.content.withdrawalFormInput.getInputValue()).toEqual(amount);
  }

  public async confirmDecimalWithdrawalAmountIsRejected(): Promise<void> {
    const input: number = Number(await account.content.withdrawalFormInput.getInputValue());
    const lower: number = Math.floor(input);
    const upper: number = Math.ceil(input);
    expect(await account.content.withdrawalFormInput.getValidationMessageText())
      .toEqual(`Please enter a valid value. The two nearest valid values are ${ lower } and ${ upper }.`);
    await this.confirmTransactionMessageIsNotDisplayed();
  }

  public async enterWithdrawalAmountGreaterThanBalance(): Promise<void> {
    const balance: number = Number(await account.content.getAccountBalanceText());
    await account.content.withdrawalFormInput.enterText(String(balance + 1));
  }

  public async confirmWithdrawalAmountGreaterThanBalanceIsRejected(): Promise<void> {
    expect(await account.content.withdrawalFormInput.getInputValue()).toEqual('');
    expect(await account.content.withdrawalFormInput.isInvalid()).toBe(true, 'Withdrawal amount is valid');
    expect(await account.content.getTransactionMessageText())
      .toEqual('Transaction Failed. You can not withdraw amount more than the balance.');
  }

  public async confirmWithdrawalSuccessMessageIsDisplayed(): Promise<void> {
    expect(await account.content.getTransactionMessageText()).toEqual('Transaction successful');
  }

  private async confirmTransactionMessageIsNotDisplayed(): Promise<void> {
    expect(await account.content.isTransactionMessageVisible()).toBe(false, 'Transaction message is visible');
  }

}
