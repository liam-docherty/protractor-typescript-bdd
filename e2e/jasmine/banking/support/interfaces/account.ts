import { Currency } from '../enums/currency.enum';
import { Transaction } from './transaction';

export interface Account {
  number: number;
  startingBalance: number;
  currency: Currency;
  transactions: Transaction[];
}
