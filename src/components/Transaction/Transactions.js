import {useParams} from 'react-router-dom';

import useStore from '../../hooks/useStore';

import Transaction from './index.js';

export default function Transactions() {
	const db = useStore(state => state.db);
	const {accountID} = useParams();
	const entries = db.find(account => account.id === accountID).entries;

	return (
		<>
			{entries.map(({id, date, change, note}) => (
				<Transaction key={id} date={date} change={change} note={note} />
			))}
		</>
	);
}
