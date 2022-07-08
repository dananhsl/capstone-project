import {useState} from 'react';
import {useParams} from 'react-router-dom';

import useStore from '../../hooks/useStore';
import {Form} from '../AddNewAccount/styled';

const initialValue = {date: '', change: '', note: '', categoryId: ''};
export default function AddTransaction() {
	const {accountID, transactionID} = useParams();
	const currentTransaction = useStore(state =>
		state.transactions.find(transaction_ => transactionID && transaction_.id === transactionID)
	);
	const [transaction, setTransaction] = useState(currentTransaction ?? initialValue);
	const categories = useStore(state => state.categories);
	const addTransaction = useStore(state => state.addTransaction);
	const editTransaction = useStore(state => state.editTransaction);
	console.log('HELLO WORLD');

	return (
		<>
			<Form
				onSubmit={event => {
					event.preventDefault();
					if (transactionID) {
						editTransaction(transactionID, transaction);
						alert('edited');
					} else {
						addTransaction(accountID, transaction);
					}
					event.target.reset();
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

				<select
					id="categorieMenu"
					onChange={event => {
						setTransaction({
							...transaction,
							categoryId: event.target.value,
						});
					}}
				>
					{categories.map(category => {
						return (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						);
					})}
				</select>
				<button type="submit">Submit</button>
			</Form>
		</>
	);
}
