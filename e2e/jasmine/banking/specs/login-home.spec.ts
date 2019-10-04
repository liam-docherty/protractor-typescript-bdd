import { LoginHomeFlow } from '../flows/login-home.flow';

const flow: LoginHomeFlow = new LoginHomeFlow();

describe('Banking - Login Home >', () => {
  beforeEach(async () => {
    await flow.goToLoginHome();
  });

  it('should reflect that user is not yet logged in header', async () => {
    await flow.confirmNotLoggedInHeaderDetails();
  });

  it('should include a panel to hold page details', async () => {
    await flow.confirmContentPanelDetails();
  });

  it('should remain on the Login page when selecting Home option', async () => {
    await flow.selectHomeOption();
    await flow.confirmRedirectToLoginHome();
  });

  it('should include options for Customer and Bank Manager login', async () => {
    await flow.confirmLoginOptions();
  });

  it('should redirect to Customer Login when user selects Customer option', async () => {
    await flow.selectCustomerLoginOption();
    await flow.confirmRedirectToCustomerLogin();
  });

  it('should redirect to Bank Manager Login when user selects Bank Manager option', async () => {
    await flow.selectBankManagerLoginOption();
    await flow.confirmRedirectToBankManagerLogin();
  });
});
