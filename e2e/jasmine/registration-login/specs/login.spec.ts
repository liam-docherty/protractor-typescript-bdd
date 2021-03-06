import { LoginFlow } from '../flows/login.flow';
import { testUser1 } from '../support/constants/users';

const flow: LoginFlow = new LoginFlow();

describe('Login >', () => {
  beforeEach(async () => {
    await flow.goToRegistration();
    await flow.completeRegistration(testUser1);
  });

  it('should display the Landing page after successfully completing login', async () => {
    await flow.completeLogin(testUser1);
    await flow.confirmRedirectToLandingPage(testUser1);
  });
});
