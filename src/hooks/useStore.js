import {nanoid} from 'nanoid';
import create from 'zustand';

import db from '../db.js';

const useStore = create(set => ({
	db: [...db],
	deleteBankaccount: id => {
		set(state => {
			return {db: state.db.filter(bankAccount => bankAccount.id !== id)};
		});
	},
	addBankaccount: bankAccount => {
		set(state => {
			return {
				db: [
					...state.db,
					{
						id: nanoid(),
						...bankAccount,
						entries: [],
					},
				],
			};
		});
	},
	editBankAccount: (id, updatedBankAccount) => {
		const updatedDb = db.map(bankAccount => {
			if (id === bankAccount.id) {
				bankAccount = {id: id, ...updatedBankAccount};
			}
			return bankAccount;
		});
		set(() => {
			return {
				db: updatedDb,
			};
		});
	},
}));

export default useStore;
