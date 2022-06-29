import useStore from '../../hooks/useStore';

import Transaction from './index.js';

export default function Transactions() {
	const db = useStore(state => state.db[0].entries);
	return (
		<>
			{db.map(({id, date, change, note}) => (
				<Transaction key={id} date={date} change={change} note={note} />
			))}
		</>
	);
}
