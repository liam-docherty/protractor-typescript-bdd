import { CustomerAccountFlow } from '../flows/customer-account.flow';
import { harryPotter } from '../support/constants/users';
import { User } from '../support/interfaces/user';

const flow: CustomerAccountFlow = new CustomerAccountFlow();
let user: User;

describe('Banking - Customer Account >', () => {
  beforeEach(async () => {
    user = harryPotter;
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

  xit('should include the option to switch to another account', async () => {
  });

  xit('should display details of the alternate account when the user switches to another account', async () => {
  });

  xit('should include options to view transactions, as well as deposit to or withdraw from their account', async () => {
  });

  xit('should redirect to the Account Transactions page when user selects to view transactions', async () => {
  });

  xit('should request an amount when the user selects to make a deposit', async () => {
  });

  xit('should not allow the user to complete a deposit until they have entered an amount', async () => {
  });

  // TODO: Other validation e.g. non number, number with more than 2 decimal places
  // TODO: Complete valid Deposit

  xit('should request an amount when the user selects to make a withdrawal', async () => {
  });

  xit('should not allow the user to complete a withdrawal until they have entered an amount', async () => {
  });

  xit('should not allow the user to complete a withdrawal' +
    'when the amount requested is greater than the account balance', async () => {
  });

  // TODO: Other validation e.g. non number, number with more than 2 decimal places
  // TODO: Complete valid Withdrawal
  // TODO: Switch from Deposit <-> Withdrawl
});
