import { TransactionType } from '../enums/transaction-type.enum';

export interface Transaction {
  type: TransactionType;
  amount: number;
}
