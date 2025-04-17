/**
 * BankAccount Class with Deposit and Withdrawal
 * Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance.
 * Include methods to deposit and withdraw money from the account.
 * Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
 */

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(accountNumber, amount) {
    if (accountNumber !== this.accountNumber) {
      return new Error('Unauthorized Deposit: an invalid account number was given');
    }
    this.balance += amount;
    return this.balance;
  }

  withdraw(accountNumber, amount) {
    if (accountNumber !== this.accountNumber) {
			return new Error(
				'Unauthorized Deposit: an invalid account number was given',
			);
		}

    if (this.balance < amount) {
      return new Error('Unable to withdraw due to inefficent funds');
    }
    this.balance -= amount;
    return this.balance;
  }

  displayBalance() {
    console.log(this.balance);
    return this.balance;
  }
}

const kAcount = new BankAccount('12345', 1000);
console.log(kAcount.deposit('12345', 2000));
console.log(kAcount.withdraw('12345', 3000));

