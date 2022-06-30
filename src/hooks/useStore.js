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
	addTransaction: (id, transaction) => {
		const updateDb = db.map(bankAccount => {
			if (id === bankAccount.id) {
				bankAccount.entries = [...bankAccount.entries, {id: nanoid(), ...transaction}];
			}
			return bankAccount;
		});
		set(() => {
			return {db: updateDb};
		});
	},
}));

export default useStore;
