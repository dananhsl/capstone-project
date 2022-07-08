import {nanoid} from 'nanoid';
import create from 'zustand';

import {accounts, transactions, categories} from '../db.js';

const useStore = create((set, get) => ({
	accounts: [...accounts],
	transactions: [...transactions],
	categories: [...categories],
	getAccountWithData(id) {
		const {accounts, transactions} = get();
		const account = accounts.find(account_ => account_.id === id);
		return {
			...account,
			Transactions: transactions.filter(transaction =>
				account.transactions.includes(transaction.id)
			),
		};
	},
	getTransactionWithData(id) {
		const {transactions, categories} = get();
		const transaction = transactions.find(transaction_ => transaction_.id === id);
		return {
			...transaction,
			Categories: categories.filter(category => transaction.categoryId.includes(category.id)),
		};
	},
	deleteBankaccount(id) {
		set(state => {
			return {accounts: state.accounts.filter(bankAccount => bankAccount.id !== id)};
		});
	},
	addBankaccount(account) {
		set(state => {
			return {
				accounts: [
					...state.accounts,
					{
						id: nanoid(),
						...account,
					},
				],
			};
		});
	},
	editBankAccount(id, account) {
		set(state => {
			const updatedDb = state.accounts.map(bankAccount => {
				if (id === bankAccount.id) {
					bankAccount = {id: id, ...account};
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
			const index2 = categories.findIndex(category => category.id === transaction.categoryId);
			categories[index2].transactions.push(transactionId);
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
			console.log(state.categories);
			state.changeTransactionCategory(partial.id, partial.categoryId);
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
	changeTransactionCategory(transactionId, newCategoryId) {
		set(state => {
			const category = state.categories.filter(category =>
				category.transactions.includes(transactionId)
			);
			const index = category[0].transactions.indexOf(transactionId);
			category[0].transactions.splice(index, 1);
			const updatedCategory = categories.filter(category_ => category_.id === newCategoryId);
			updatedCategory[0].transactions.push(transactionId);
			console.log(state.categories);
			return {};
		});
	},
}));

export default useStore;
