import { testUser1 } from '../../support/constants/users';
import { LoginFlow } from '../flows/login.flow';

const flow: LoginFlow = new LoginFlow();

describe('Login >', () => {
  beforeEach(async () => {
    await flow.goToRegistration();
    await flow.completeRegistration(testUser1);
  });

  it('should display the Landing page successfully completing login', async () => {
    await flow.completeLogin(testUser1);
    await flow.confirmRedirectToLandingPage();
  });
});
