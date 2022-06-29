
import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore';

import BankAccount from './index.js';

export default function BankAccounts() {
	const db = useStore(state => state.db);
	const deleteBankaccount = useStore(state => state.deleteBankaccount);
	const navigate = useNavigate();
	return (
		<>
			{db.map(({id, accountName, bankName, accountValue}) => (
				<BankAccount
					key={id}
					accountName={accountName}
					bankName={bankName}
					accountValue={accountValue}
					onDelete={() => {
						deleteBankaccount(id);
					}}

					onNavigate={() => {
						navigate('/' + id);
					}}
				/>
			))}
		</>
	);
}
