import { Currency } from '../enums/currency.enum';
import { TransactionType } from '../enums/transaction-type.enum';
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
      startingBalance: 465,
      currency: Currency.Dollar,
      transactions: [
        {
          type: TransactionType.Deposit,
          amount: 21,
        },
        {
          type: TransactionType.Deposit,
          amount: 500,
        },
        {
          type: TransactionType.Withdrawal,
          amount: 47,
        },
        {
          type: TransactionType.Withdrawal,
          amount: 9,
        },
      ],
    },
    {
      number: 1005,
      startingBalance: 0,
      currency: Currency.Pound,
      transactions: [],
    },
    {
      number: 1006,
      startingBalance: 0,
      currency: Currency.Rupee,
      transactions: [],
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
