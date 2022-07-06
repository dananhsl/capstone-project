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
	addBankaccount: bankAccount => {
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
	//To Do Refactor editBankaccount clean code
	editBankAccount: (id, updatedBankAccount) => {
		const updatedDb = accounts.map(bankAccount => {
			if (id === bankAccount.id) {
				bankAccount = {id: id, ...updatedBankAccount};
			}
			return bankAccount;
		});
		set(() => {
			return {
				accounts: updatedDb,
			};
		});
	},

	// addTransaction: (id, transaction) => {
	// 	const updateDb = db.map(bankAccount => {
	// 		if (id === bankAccount.id) {
	// 			bankAccount.entries = [...bankAccount.entries, {id: nanoid(), ...transaction}];
	// 		}
	// 		return bankAccount;
	// 	});
	// 	set(() => {
	// 		return {db: updateDb};
	// 	});
	// },

	// editTransaction: (id, transaction) => {
	// 	set(state => {
	// 		const account = state.db.find(account => account.id === id);
	// 		const index = account.entries.findIndex(entry => entry.id === transaction.id);
	// 		account.entries[index] = transaction;
	// 		return {db: [...state.db]};
	// 	});
	// },

	// deleteEntry: (id, entryId) => {
	// 	const updatedDb = db.map(bankAccount => {
	// 		if (id === bankAccount.id) {
	// 			bankAccount.entries = bankAccount.entries.filter(entry => entry.id !== entryId);
	// 		}
	// 		return bankAccount;
	// 	});
	// 	set(() => {
	// 		return {
	// 			db: updatedDb,
	// 		};
	// 	});
	// },
}));

export default useStore;
