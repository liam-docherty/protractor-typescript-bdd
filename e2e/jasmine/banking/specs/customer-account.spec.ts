import { CustomerAccountFlow } from '../flows/customer-account.flow';

const flow: CustomerAccountFlow = new CustomerAccountFlow();

describe('Banking - Customer Account >', () => {
  beforeEach(async () => {

  });

  xit('should reflect that user is logged in header', async () => {
  });

  it('should include a panel to hold page specific content', async () => {
    await flow.confirmContentPanelDetails();
  });

  it('should redirect to the Login home page when selecting Home option', async () => {
    await flow.selectHomeOption();
    await flow.confirmRedirectToLoginHome();
  });

  xit('should redirect to the Customer Login page when selecting Logout option', async () => {
  });

  xit('should display the customer name in a welcome message', async () => {
  });

  xit('should display details of the customers first account by default', async () => {
  });

  xit('should include the option to switch to another account', async () => {
  });

  xit('should display details of the alternate account when the user switches to another account', async () => {
  });

  xit('should include options to view transactions, as well as deposit to or withdraw from their account', async () => {
  });

  xit('should redirect to the Account Transactions page when user selects to view transactions', async () => {
  });

  // TODO: Deposit Validation, Add Deposit, Withdraw Validation, Add Withdrawl, Switch from Deposit <-> Withdrawl
});
