import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore';
import FormTransaction from '../../pages/formTransaction';

import Transaction from './index.js';

export default function Transactions() {
	useStore(state => state.transactions);
	const {accountID} = useParams();
	const getAccountWithData = useStore(state => state.getAccountWithData);
	const account = getAccountWithData(accountID);
	const navigate = useNavigate();
	const deleteTransaction = useStore(state => state.deleteTransaction);

	return (
		<>
			{account.Transactions.map(({id, date, change, note}) => (
				<Transaction
					key={id}
					date={date}
					change={change}
					note={note}
					onEdit={() => {
						navigate('/transaction/edit/' + accountID + '/' + id);
					}}
					deleteTransaction={() => {
						deleteTransaction(id);
					}}
				/>
			))}
			<FormTransaction />
		</>
	);
}
