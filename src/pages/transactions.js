import {useNavigate, useParams} from 'react-router-dom';

import Button from '../components/Button';
import AccountBalance from '../components/Transaction/AccountBalance';
import {AddTransactionButton} from '../components/Transaction/styled';
import Transactions from '../components/Transaction/Transactions';

export default function TransactionHistory() {
	const navigate = useNavigate();
	const accountID = useParams().accountID;
	return (
		<>
			<h1>Transactions</h1>
			<Button />
			<AccountBalance />
			<Transactions />
			<AddTransactionButton onClick={() => navigate('/transaction/add/' + accountID)}>
				+
			</AddTransactionButton>
		</>
	);
}
