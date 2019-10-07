import { Currency } from '../enums/currency.enum';

export interface Account {
  number: number;
  startingBalance: number;
  currency: Currency;
}
