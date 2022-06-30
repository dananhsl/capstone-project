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
		set(state => {
			return {db: updateDb};
		});
	},
}));

export default useStore;

//Second attempt
// const updateDb = state.db.map(bankAccount => {
// 	if (bankAccount.id === id) {
// 		return (bankAccount.entries = [
// 			...bankAccount.entries,
// 			{id: nanoid(), ...transaction},
// 		]);
// 	} else {
// 		return bankAccount;
// 	}
// });
// return {db: [...updateDb]};

/*
	First Attempt 
	Bug detected: 
	add new transaction works but added it aswell to the bankaccounts
*/
// const filteredAccount = db.find(bankAccount => bankAccount.id === id);
// 			return {
// 				db: [
// 					...state.db,

// 					(filteredAccount.entries = [
// 						...filteredAccount.entries,
// 						{id: nanoid(), ...transaction},
// 					]),
// 				],
