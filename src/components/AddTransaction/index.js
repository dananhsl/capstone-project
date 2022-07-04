import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import useStore from '../../hooks/useStore';
import {Form} from '../AddNewAccount/styled';

export default function AddTransaction() {
	const [transaction, setTransaction] = useState({
		date: '',
		change: '',
		note: '',
		category: '',
	});

	const {accountID, transactionID} = useParams();
	const currentBankAccount = useStore(state =>
		state.db.find(account => account.id === accountID)
	);

	const currentTransaction = currentBankAccount.entries.find(entry => entry.id === transactionID);

	const addTransaction = useStore(state => state.addTransaction);
	const editTransaction = useStore(state => state.editTransaction);

	useEffect(() => {
		if (currentTransaction) {
			setTransaction({
				id: currentTransaction.id,
				date: currentTransaction.date,
				change: currentTransaction.change,
				note: currentTransaction.note,
				category: currentTransaction.category,
			});
		}
	}, [currentTransaction]);

	return (
		<>
			<Form
				onSubmit={event => {
					event.preventDefault();
					if (transactionID) {
						editTransaction(accountID, transaction);
						alert('edited');
					} else {
						addTransaction(accountID, transaction);
					}
					setTransaction({date: '', change: '', note: '', category: ''});
				}}
			>
				<label htmlFor="date">Date</label>
				<input
					id="date"
					value={transaction.date}
					onChange={event => {
						setTransaction({...transaction, date: event.target.value});
					}}
					type="date"
					aria-label="Enter the date of the transaction"
					placeholder="e.g 29.06.2022"
				></input>

				<label htmlFor="changeValue">change value</label>
				<input
					id="changeValue"
					value={transaction.change}
					onChange={event => {
						setTransaction({...transaction, change: event.target.value});
					}}
					type="text"
					pattern="([0-9]+)([,\\.]{1}[0-9]+)"
					aria-label="Enter the change value for that transaction"
					placeholder="500"
				></input>

				<label htmlFor="note">Write a describtive note</label>
				<input
					id="note"
					value={transaction.note}
					onChange={event => {
						setTransaction({...transaction, note: event.target.value});
					}}
					type="text"
					aria-label="Enter a decribtive note for that transaction"
					placeholder="e.g. online shopping"
				></input>

				<label htmlFor="categorieMenu">Select a fitting category</label>
				<input
					id="categorieMenu"
					list="categories"
					value={transaction.category}
					onChange={event => {
						setTransaction({...transaction, category: event.target.value});
					}}
					aria-label="Select a category in the Menu"
					placeholder="select a category"
				></input>
				<datalist id="categories">
					<option value="household products" />
					<option value="hobbies and free time" />
					<option value="groceries" />
					<option value="other" />
					<option value="gasoline" />
					<option value="insurance" />
					<option value="subscriptions" />
					<option value="rent" />
				</datalist>
				<button type="submit">Submit</button>
			</Form>
		</>
	);
}
