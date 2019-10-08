import { CustomerAccountFlow } from '../flows/customer-account.flow';
import { harryPotter } from '../support/constants/users';
import { User } from '../support/interfaces/user';

const flow: CustomerAccountFlow = new CustomerAccountFlow();
let user: User;

describe('Banking - Customer Account >', () => {
  // TODO: Instead of starting at 0, setup one deposit and one withdrawal before tests. Refactor tests accordingly
  beforeAll(async () => {
    user = harryPotter;
    await flow.clearCustomerAccountTransactions(user);
  });

  beforeEach(async () => {
    await flow.goToCustomerAccount(user);
  });

  it('should reflect that user is logged in header', async () => {
    await flow.confirmLoggedInHeaderDetails();
  });

  it('should include a panel to hold page specific content', async () => {
    await flow.confirmContentPanelDetails();
  });

  it('should redirect to the Login home page when selecting Home option', async () => {
    await flow.selectHomeOption();
    await flow.confirmRedirectToLoginHome();
  });

  it('should redirect to the Customer Login page when selecting Logout option', async () => {
    await flow.selectLogoutOption();
    await flow.confirmRedirectToCustomerLogin();
  });

  it('should display the customer name in a welcome message', async () => {
    await flow.confirmWelcomeMessageDetails(user);
  });

  it('should display details of the customers first account by default', async () => {
    await flow.confirmFirstAccountIsSelectedByDefault(user);
    await flow.confirmFirstAccountDetailsAreDisplayed(user);
  });

  it('should include the option to switch to other accounts', async () => {
    await flow.confirmAccountListSelectOptions(user);
  });

  it('should display details of the alternate account when the user switches to another account', async () => {
    const accountIndex: number = 1;
    await flow.switchAccount(accountIndex);
    await flow.confirmSelectedAccountDetailsAreDisplayed(user, accountIndex);
  });

  it('should include options to view transactions, as well as deposit to or withdraw from their account', async () => {
    await flow.confirmAccountActionsAreAvailable();
  });

  it('should not request an amount before user selects to make a deposit', async () => {
    await flow.confirmDepositAmountRequestIsNotDisplayed();
    await flow.confirmDepositOptionIsNotHighlighted();
  });

  it('should request an amount when the user selects to make a deposit', async () => {
    await flow.selectDepositOption();
    await flow.confirmDepositAmountRequestIsDisplayed();
    await flow.confirmDepositOptionIsHighlighted();
  });

  it('should not allow the user to complete a deposit until they have entered an amount', async () => {
    await flow.selectDepositOption();
    await flow.selectDepositAmountConfirm();
    await flow.confirmDepositAmountIsRequired();
  });

  it('should only allow the user to enter numeric characters as a deposit amount', async () => {
    await flow.selectDepositOption();
    await flow.enterDepositAmount('a1b2!3%4.5');
    await flow.confirmDepositInputValue('1234.5');
  });

  it('should only allow the user to deposit integer amounts', async () => {
    await flow.selectDepositOption();
    await flow.enterDepositAmount('0.5');
    await flow.selectDepositAmountConfirm();
    await flow.confirmDecimalDepositAmountIsRejected();
  });

  it('should update the selected account balance when a valid deposit amount is submitted', async () => {
    await flow.selectDepositOption();
    // TODO: Allow this to accept numbers so we are consistent with types in this test
    await flow.enterDepositAmount('12345');
    await flow.selectDepositAmountConfirm();
    await flow.confirmAccountBalance(harryPotter, 0, 12345);
    await flow.confirmDepositSuccessMessageIsDisplayed();
  });

  it('should not request an amount before user selects to make a withdrawal', async () => {
    await flow.confirmWithdrawalAmountRequestIsNotDisplayed();
    await flow.confirmWithdrawalOptionIsNotHighlighted();
  });

  it('should request an amount when the user selects to make a withdrawal', async () => {
    await flow.selectWithdrawalOption();
    await flow.confirmWithdrawalAmountRequestIsDisplayed();
    await flow.confirmWithdrawalOptionIsHighlighted();
  });

  it('should not allow the user to complete a withdrawal until they have entered an amount', async () => {
    await flow.selectWithdrawalOption();
    await flow.selectWithdrawalAmountConfirm();
    await flow.confirmWithdrawalAmountIsRequired();
  });

  it('should only allow the user to enter numeric characters as a withdrawal amount', async () => {
    await flow.selectWithdrawalOption();
    await flow.enterWithdrawalAmount('a1b2!3%4.5');
    await flow.confirmWithdrawalInputValue('1234.5');
  });

  it('should only allow the user to withdraw integer amounts', async () => {
    await flow.selectWithdrawalOption();
    await flow.enterWithdrawalAmount('0.5');
    await flow.selectWithdrawalAmountConfirm();
    await flow.confirmDecimalWithdrawalAmountIsRejected();
  });

  xit('should not allow the user to complete a withdrawal' +
    'when the amount requested is greater than the account balance', async () => {
  });

  // TODO: Complete valid Withdrawal
  // TODO: Switch from Deposit <-> Withdrawl
});
