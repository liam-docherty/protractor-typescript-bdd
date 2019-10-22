import { Account } from './account';

export interface User {
  firstName: string;
  lastName: string;
  accounts: Account[];
}
