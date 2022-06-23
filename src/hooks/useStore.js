import create from 'zustand';

import db from '../db.js';

const useStore = create(set => ({
	db: [...db],
}));

export default useStore;
