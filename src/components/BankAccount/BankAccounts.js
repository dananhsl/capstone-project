import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore';

import BankAccount from './index.js';

export default function BankAccounts() {
	const accounts = useStore(state => state.accounts);
	const deleteBankaccount = useStore(state => state.deleteBankaccount);
	const navigate = useNavigate();
	return (
		<>
			{accounts.map(({id, name, bankName, value}) => (
				<BankAccount
					key={id}
					accountName={name}
					bankName={bankName}
					value={value}
					onDelete={() => {
						deleteBankaccount(id);
					}}
					onNavigate={() => {
						navigate('/' + id);
					}}
					onEdit={() => {
						navigate('/bankAccount/edit/' + id);
					}}
				/>
			))}
		</>
	);
}
