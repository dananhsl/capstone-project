import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';

import {Form} from './styled.js';

export default function AddNewBankAccount() {
	const initialValue = {name: '', value: '', transactions: [], bankName: ''};
	const [account, setAccount] = useState(initialValue);
	const {accountID} = useParams();
	const currentAccount = useStore(state =>
		state.accounts.find(account => account.id === accountID)
	);
	const editBankAccount = useStore(state => state.editBankAccount);
	const addBankaccount = useStore(state => state.addBankaccount);
	const navigate = useNavigate();

	useEffect(() => {
		if (currentAccount) {
			setAccount({
				name: currentAccount.name,
				value: currentAccount.value,
				transactions: [...currentAccount.transactions],
				bankName: currentAccount.bankName,
			});
		}
	}, [currentAccount]);
	return (
		<>
			<Form
				onSubmit={event => {
					event.preventDefault();
					if (accountID) {
						editBankAccount(accountID, account);
						alert('Edited');
					} else {
						addBankaccount(account);
					}
					setAccount(initialValue);
					navigate('/');
				}}
			>
				<label htmlFor="accountName">Enter the name of your Bank Account</label>
				<input
					onChange={event => {
						setAccount({...account, name: event.target.value});
					}}
					id="inputAccountName"
					value={account.name}
					type="text"
					required
					aria-label="Enter the name of your Bank Account"
					placeholder="Bargeld"
				></input>

				<label htmlFor="bankName">Enter the name of your Bank </label>
				<input
					onChange={event => {
						setAccount({...account, bankName: event.target.value});
					}}
					id="inputBankName"
					value={account.bankName}
					type="text"
					required
					aria-label="Enter the name of your Bank"
					placeholder="Hosentasche"
				></input>

				<label htmlFor="accountValue">Enter the current amount of money</label>
				<input
					onChange={event => {
						setAccount({
							...account,
							value: event.target.value.replace(',', '.'),
						});
					}}
					id="inputAccountValue"
					value={account.value}
					type="text"
					pattern="([0-9]+)([,\\.]{1}[0-9]+)"
					required
					aria-label="Enter the current Value"
					placeholder="5.25"
				></input>

				<button type="submit">Submit</button>
			</Form>
		</>
	);
}
