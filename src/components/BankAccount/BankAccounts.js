import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore';

import {Section} from './styled';

export default function BankAccount() {
	const bankAccounts = useStore(state => state.db);
	const deleteBankaccount = useStore(state => state.deleteBankaccount);
	const navigate = useNavigate();
	return (
		<>
			{bankAccounts.map(bankAccount => {
				return (
					<Section key={bankAccount.id}>
						<h2>{bankAccount.accountName}</h2>
						<h3>{bankAccount.bankName}</h3>
						<p>{bankAccount.accountValue} €</p>
						<button type="button" onClick={() => navigate('/' + bankAccount.id)}>
							Transactions
						</button>
						<button type="button" onClick={() => deleteBankaccount(bankAccount.id)}>
							Delete
						</button>
					</Section>
				);
			})}
		</>
	);
}
