import create from 'zustand';

import db from '../db.js';

const useStore = create(set => ({
	db: [...db],
	deleteBankaccount: id => {
		set(state => {
			return {db: state.db.filter(bankAccount => bankAccount.id !== id)};
		});
	},
}));

export default useStore;
