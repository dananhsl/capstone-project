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
		set(state => {
			// const filteredAccount = state.db.filter(bankAccount => bankAccount.id === id);
			// console.log(filteredAccount);

			const filteredAccount = db.find(bankAccount => bankAccount.id === id);
			let entries = filteredAccount.entries;
			return {
				db: [
					...state.db,
					(filteredAccount.entries = [...entries, {id: nanoid(), ...transaction}]),
				],
			};
		});
	},
}));

export default useStore;
