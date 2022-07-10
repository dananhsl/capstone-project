import {nanoid} from 'nanoid';
import create from 'zustand';
import {persist} from 'zustand/middleware';

import {accounts, transactions} from '../db.js';

const useStore = create(
	persist(
		(set, get) => ({
			accounts: [...accounts],
			transactions: [...transactions],
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
					const index = state.transactions.findIndex(
						transaction => transaction.id === id
					);
					const transactions = state.transactions.map(transaction => ({...transaction}));
					transactions[index] = {...transactions[index], ...partial};
					return {transactions};
				});
			},
			deleteTransaction(id) {
				set(state => {
					return {
						transactions: state.transactions.filter(
							transaction => transaction.id !== id
						),
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
