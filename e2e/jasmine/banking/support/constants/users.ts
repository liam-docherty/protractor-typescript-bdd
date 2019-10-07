import { Currency } from '../enums/currency.enum';
import { User } from '../interfaces/user';

export const hermoineGranger: User = {
  firstName: 'Hermoine',
  lastName: 'Granger',
  accounts: [],
};

export const harryPotter: User = {
  firstName: 'Harry',
  lastName: 'Potter',
  accounts: [
    {
      number: 1004,
      startingBalance: 0,
      currency: Currency.Dollar,
    },
    {
      number: 1005,
      startingBalance: 0,
      currency: Currency.Pound,
    },
    {
      number: 1006,
      startingBalance: 0,
      currency: Currency.Rupee,
    },
  ],
};

export const ronWeasly: User = {
  firstName: 'Ron',
  lastName: 'Weasly',
  accounts: [],
};

export const albusDumbledore: User = {
  firstName: 'Albus',
  lastName: 'Dumbledore',
  accounts: [],
};

export const nevilleLongbottom: User = {
  firstName: 'Neville',
  lastName: 'Longbottom',
  accounts: [],
};

export const registeredUsers: User[] = [
  hermoineGranger,
  harryPotter,
  ronWeasly,
  albusDumbledore,
  nevilleLongbottom,
];
