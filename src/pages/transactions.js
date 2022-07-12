import {useNavigate, useParams} from 'react-router-dom';

import Button from '../components/Button';
import AccountBalance from '../components/Transaction/AccountBalance';
import Transactions from '../components/Transaction/Transactions';

export default function TransactionHistory() {
	const navigate = useNavigate();
	const accountID = useParams().accountID;
	return (
		<>
			<h1>Your recent transactions:</h1>
			<Button />
			<AccountBalance />
			<button onClick={() => navigate('/transaction/add/' + accountID)}>
				Add new Transaction
			</button>
			<Transactions />
		</>
	);
}
