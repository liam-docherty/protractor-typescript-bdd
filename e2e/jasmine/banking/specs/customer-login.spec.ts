import { CustomerLoginFlow } from '../flows/customer-login.flow';

const flow: CustomerLoginFlow = new CustomerLoginFlow();

describe('Banking - Customer Login >', () => {
  beforeEach(async () => {
    await flow.goToCustomerLogin();
  });

  it('should reflect that user is not yet logged in header', async () => {
    await flow.confirmNotLoggedInHeaderDetails();
  });

  it('should include a panel to hold page details', async () => {
    await flow.confirmContentPanelDetails();
  });

  it('should redirect to the Login home page when selecting Home option', async () => {
    await flow.selectHomeOption();
    await flow.confirmRedirectToLoginHome();
  });

  it('should include a default option before user selects their option', async () => {
    await flow.confirmDefaultRegisteredUserOption();
  });

  it('should include the list of registered users to allow user to select from', async () => {
    await flow.confirmRegisteredUserList();
  });
});
