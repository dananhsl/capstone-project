import {useState} from 'react';

import useStore from '../../hooks/useStore.js';

import {Form} from './styled.js';

export default function AddNewBankAccount() {
	const [bankAccount, setBankAccount] = useState({
		accountName: '',
		bankName: '',
		accountValue: '',
	});
	const addBankaccount = useStore(state => state.addBankaccount);
	return (
		<>
			<Form
				onSubmit={event => {
					event.preventDefault();
					addBankaccount(bankAccount);
					setBankAccount({accountName: '', bankName: '', accountValue: ''});
				}}
			>
				<label htmlFor="accountName">Enter the name of your Bank Account</label>
				<input
					onChange={event => {
						setBankAccount({...bankAccount, accountName: event.target.value});
					}}
					id="inputAccountName"
					value={bankAccount.accountName}
					type="text"
					required
					aria-label="Enter the name of your Bank Account"
					placeholder="Bargeld"
				></input>

				<label htmlFor="bankName">Enter the name of your Bank </label>
				<input
					onChange={event => {
						setBankAccount({...bankAccount, bankName: event.target.value});
					}}
					id="inputBankName"
					value={bankAccount.bankName}
					type="text"
					required
					aria-label="Enter the name of your Bank"
					placeholder="Hosentasche"
				></input>

				<label htmlFor="accountValue">Enter the current amount of money</label>
				<input
					onChange={event => {
						setBankAccount({
							...bankAccount,
							accountValue: event.target.value.replace(',', '.'),
						});
					}}
					id="inputAccountValue"
					value={bankAccount.accountValue}
					type="text"
					pattern="([0-9]+)([,\\.]{1}[0-9]+)"
					required
					aria-label="Enter the current Value"
					placeholder="5.25"
				></input>

				<button type="submit">Add new account</button>
			</Form>
		</>
	);
}