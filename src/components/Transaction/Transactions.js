import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import useStore from '../../hooks/useStore';
import {notifyDelete} from '../Toasts/Toasts';

import Transaction from './index.js';

export default function Transactions() {
	useStore(state => state.transactions);
	const {accountID} = useParams();
	const getAccountWithData = useStore(state => state.getAccountWithData);
	const getTransactionWithData = useStore(state => state.getTransactionWithData);
	const account = getAccountWithData(accountID);
	const navigate = useNavigate();
	const deleteTransaction = useStore(state => state.deleteTransaction);

	return (
		<>
			{account.Transactions.map(({id, date, change, note}) => {
				const transaction = getTransactionWithData(id);
				return (
					<Transaction
						key={id}
						date={date}
						change={change}
						note={note}
						category={transaction.Categories[0].name}
						onEdit={() => {
							navigate('/transaction/edit/' + accountID + '/' + id);
						}}
						deleteTransaction={() => {
							deleteTransaction(id);
							navigate('/' + accountID);
							notifyDelete();
						}}
					/>
				);
			})}
			<ToastContainer />
		</>
	);
}
