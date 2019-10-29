import {
  After,
  Before,
} from 'cucumber';
import { browser } from 'protractor';
import {
  harryPotter,
  registeredUsers,
} from '../../../jasmine/banking/support/constants/users';
import { TransactionType } from '../../../jasmine/banking/support/enums/transaction-type.enum';
import { Transaction } from '../../../jasmine/banking/support/interfaces/transaction';
import { CustomerAccountPage } from '../../../page-objects/banking/customer-account-page.po';
import { CustomerAccountTransactionsPage } from '../../../page-objects/banking/customer-account-transactions-page.po';
import { CustomerLoginPage } from '../../../page-objects/banking/customer-login-page.po';

const customer: CustomerLoginPage = new CustomerLoginPage();
const account: CustomerAccountPage = new CustomerAccountPage();
const transactions: CustomerAccountTransactionsPage = new CustomerAccountTransactionsPage();

// As mentioned in the README file, any data setup and teardown should be achieved using an API call,
// not by interacting with the UI
Before({ tags: '@_HarryPotter' }, async () => {
  // TODO: This isn't being passed from hooks to the tests themselves. Investigate how to solve this
  this.user = harryPotter;
});

Before({ tags: '@_SetupCustomerAccountTransactions' }, async () => {
  this.accountIndex = 0;
  // TODO: The next lines until transaction count are from methods on BaseFlow.
  //  Introduce something similar so it can be re-used
  await browser.get('BankingProject/#/customer');
  // Add one to index as registeredUsers doesn't account for the '---Your Name---' option
  this.userIndex = registeredUsers.indexOf(this.user) + 1;
  await customer.content.userSelect.select.clickOptionByIndex(this.userIndex);
  await customer.content.loginButton.click();
  await account.content.accountSelect.clickMenu();
  await account.content.accountSelect.clickOptionByIndex(this.accountIndex);
  const transactionCount: number = this.user.accounts[this.accountIndex].transactions.length;
  for (let i: number = 0; i < transactionCount; i++) {
    const transaction: Transaction = this.user.accounts[this.accountIndex].transactions[i];
    if (transaction.type === TransactionType.Deposit) {
      await account.content.depositTabButton.click();
      await account.content.depositFormAmount.input.enterText(transaction.amount.toString());
      await account.content.depositFormButton.click();
    } else if (transaction.type === TransactionType.Withdrawal) {
      await account.content.withdrawalTabButton.click();
      await account.content.withdrawalFormAmount.input.enterText(transaction.amount.toString());
      await account.content.withdrawalFormButton.click();
    }
  }
});

After({ tags: '@_TeardownCustomerAccountTransactions' }, async () => {
  await browser.get('BankingProject/#/customer');
  // Add one to index as registeredUsers doesn't account for the '---Your Name---' option
  await customer.content.userSelect.select.clickOptionByIndex(this.userIndex);
  await customer.content.loginButton.click();
  await account.content.accountSelect.clickMenu();
  await account.content.accountSelect.clickOptionByIndex(this.accountIndex);
  await account.content.transactionsTabButton.click();
  if (await transactions.content.resetButton.isVisible()) {
    await transactions.content.resetButton.click();
  }
});
