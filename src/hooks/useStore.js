import {nanoid} from 'nanoid';
import create from 'zustand';

import {accounts, transactions, banks} from '../db.js';

const useStore = create((set, get) => ({
	accounts: [...accounts],
	transactions: [...transactions],
	banks: [...banks],
	getAccountWithData(id) {
		const {accounts, transactions, banks} = get();
		const account = accounts.find(account_ => account_.id === id);
		return {
			...account,
			Transactions: transactions.filter(transaction =>
				account.transactions.includes(transaction.id)
			),
			Bank: banks.find(bank => bank.id === account.bankId),
		};
	},
	deleteBankaccount(id) {
		set(state => {
			return {accounts: state.accounts.filter(bankAccount => bankAccount.id !== id)};
		});
	},
	addBankaccount(bankAccount) {
		set(state => {
			return {
				accounts: [
					...state.accounts,
					{
						id: nanoid(),
						...bankAccount,
					},
				],
			};
		});
	},
	editBankAccount(id, updatedBankAccount) {
		set(state => {
			const updatedDb = state.accounts.map(bankAccount => {
				if (id === bankAccount.id) {
					bankAccount = {id: id, ...updatedBankAccount};
				}
				return bankAccount;
			});
			return {
				accounts: updatedDb,
			};
		});
	},
	addTransaction: (accountId, transaction) => {
		set(state => {
			const transactionId = nanoid();
			const {accounts} = get();
			const index = accounts.findIndex(account => account.id === accountId);
			accounts[index].transactions.push(transactionId);

			return {
				accounts: [...accounts],
				transactions: [
					...state.transactions,
					{
						id: transactionId,
						accountID: accountId,
						...transaction,
					},
				],
			};
		});
	},

	editTransaction(id, partial) {
		set(state => {
			const index = state.transactions.findIndex(transaction => transaction.id === id);
			const transactions = state.transactions.map(transaction => ({...transaction}));
			transactions[index] = {...transactions[index], ...partial};
			return {transactions};
		});
	},
	deleteTransaction(id) {
		set(state => {
			return {
				transactions: state.transactions.filter(transaction => transaction.id !== id),
			};
		});
	},
}));

export default useStore;
