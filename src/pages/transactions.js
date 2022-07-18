import {useNavigate, useParams} from 'react-router-dom';

import {StyledBackBtn} from '../components/Button/styled';
import {backIcon, addIcon} from '../components/Icons/Icons';
import AccountBalance from '../components/Transaction/AccountBalance';
import {AddTransactionButton} from '../components/Transaction/styled';
import Transactions from '../components/Transaction/Transactions';

export default function TransactionHistory() {
	const navigate = useNavigate();
	const accountID = useParams().accountID;
	return (
		<>
			<h1>Transactions</h1>
			<StyledBackBtn onClick={() => navigate('/')}>{backIcon}</StyledBackBtn>
			<AccountBalance />
			<Transactions />
			<AddTransactionButton onClick={() => navigate('/transaction/add/' + accountID)}>
				{addIcon}
			</AddTransactionButton>
		</>
	);
}
