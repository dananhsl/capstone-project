import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import useStore from '../../../hooks/useStore.js';
import {BackButton} from '../FormTransaction/styled.js';
import {notifyAdd, notifyEdit} from '../../Toasts/Toasts.js';

import {StyledForm, StyledArticle} from '../styled.js';

export default function FormAccount() {
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
			<BackButton
				type="button"
				onClick={() => {
					navigate('/');
				}}
			>
				Go back
			</BackButton>
			<StyledForm
				onSubmit={event => {
					event.preventDefault();
					if (accountID) {
						editBankAccount(accountID, account);
						notifyEdit();
					} else {
						addBankaccount(account);
						notifyAdd();
					}
					setAccount(initialValue);
					setTimeout(() => {
						navigate('/');
					}, 2000);
				}}
			>
				<StyledArticle>
					<label htmlFor="accountName">Account Name</label>
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
				</StyledArticle>
				<StyledArticle>
					<label htmlFor="bankName">Bank Name</label>
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
				</StyledArticle>
				<StyledArticle>
					<label htmlFor="accountValue">Current Balance</label>
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
				</StyledArticle>
				<button type="submit">Submit</button>
			</StyledForm>
			<ToastContainer />
		</>
	);
}
