import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore';

import {Section} from './styled';

import BankAccount from './index.js';

export default function BankAccount() {
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
					onClick={() => {navigate('/' + bankAccount.id)}}
					onDelete={() => {
						deleteBankaccount(id);}}
						
					</Section>
				);
			})}
