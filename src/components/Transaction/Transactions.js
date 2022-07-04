import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore';
import FormTransaction from '../../pages/formTransaction';

import Transaction from './index.js';

export default function Transactions() {
	const db = useStore(state => state.db);
	const {accountID} = useParams();
	const entries = db.find(account => account.id === accountID).entries;
	const navigate = useNavigate();
	const deleteEntry = useStore(state => state.deleteEntry);

	return (
		<>
			{entries.map(({id, date, change, note}) => (
				<Transaction
					key={id}
					date={date}
					change={change}
					note={note}
					onEdit={() => {
						navigate('/transaction/edit/' + accountID + '/' + id);
					}}
					deleteEntry={() => {
						deleteEntry(accountID, id);
					}}
				/>
			))}
			<FormTransaction />
		</>
	);
}
