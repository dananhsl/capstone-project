import {nanoid} from 'nanoid';
import create from 'zustand';
import {persist} from 'zustand/middleware';

import {accounts, transactions, categories} from '../db.js';

const useStore = create(
	persist(
		(set, get) => ({
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
					Categories: categories.filter(category =>
						transaction.categoryId.includes(category.id)
					),
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
					accounts[index].value += transaction.change;
					accounts[index].value = Math.round(accounts[index].value * 100) / 100;
					const index2 = categories.findIndex(
						category => category.id === transaction.categoryId
					);
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
			editTransaction(id, update) {
				set(state => {
					const oldValue = state.transactions.find(
						transaction => transaction.id === id
					).change;
					const transactions = state.transactions.map(transaction => {
						return transaction.id === id ? {...update, id} : transaction;
					});
					const categories = state.categories.map(category => {
						const index = category.transactions.indexOf(id);
						if (index > -1) {
							category.transactions.splice(index, 1);
						}
						if (category.id === update.categoryId) {
							category.transactions.push(id);
						}
						return category;
					});
					if (update.change !== oldValue) {
						const index = state.accounts.findIndex(
							account => account.id === update.accountID
						);
						state.accounts[index].value += update.change - oldValue;
						state.accounts[index].value =
							Math.round(state.accounts[index].value * 100) / 100;
					}
					return {transactions, categories, accounts: [...state.accounts]};
				});
			},
			deleteTransaction(id) {
				set(state => {
					const {transactions, accounts} = get();
					const transaction = transactions.find(transaction_ => transaction_.id === id);
					const index = accounts.findIndex(
						account => account.id === transaction.accountID
					);
					accounts[index].value -= transaction.change;
					accounts[index].value = Math.round(accounts[index].value * 100) / 10;
					const index2 = categories.findIndex(
						category => category.id === transaction.categoryId
					);
					categories[index2].transactions.splice(
						categories[index2].transactions.indexOf(id),
						1
					);

					return {
						transactions: state.transactions.filter(
							transaction => transaction.id !== id
						),
						accounts: [...accounts],
						categories: [...categories],
					};
				});
			},
			move(previousIndex, nextIndex) {
				set(state => {
					const accounts = [...state.accounts];
					const account = accounts.splice(previousIndex, 1);
					accounts.splice(nextIndex, 0, ...account);
					return {accounts};
				});
			},
		}),
		{name: 'Digibook_data'}
	)
);

export default useStore;
