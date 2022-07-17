import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import useStore from '../../../hooks/useStore';
import {StyledForm} from '../styled';
import {notifyAdd, notifyEdit} from '../../Toasts/Toasts';

import {BackButton} from './styled';
const initialValue = {date: '', change: '', note: '', categoryId: ''};

export default function FormTransaction() {
	const {accountID, transactionID} = useParams();
	const currentTransaction = useStore(state =>
		state.transactions.find(transaction_ => transactionID && transaction_.id === transactionID)
	);
	const [transaction, setTransaction] = useState(currentTransaction ?? initialValue);
	const categories = useStore(state => state.categories);
	const addTransaction = useStore(state => state.addTransaction);
	const editTransaction = useStore(state => state.editTransaction);
	const navigate = useNavigate();

	function toggleIncomeExpense() {
		setTransaction({...transaction, change: (transaction.change * -1).toFixed(2)});
	}

	return (
		<>
			<BackButton
				type="button"
				onClick={() => {
					navigate('/' + accountID);
				}}
			>
				Go back
			</BackButton>
			<StyledForm
				onSubmit={event => {
					event.preventDefault();
					transaction.change = parseFloat(transaction.change);
					if (transactionID) {
						editTransaction(transactionID, transaction);
						notifyEdit();
					} else {
						addTransaction(accountID, transaction);
						notifyAdd();
					}
					event.target.reset();
					setTimeout(() => {
						navigate('/' + accountID);
					}, 2000);
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
						setTransaction({
							...transaction,
							change: event.target.value.replace(',', '.'),
						});
					}}
					type="text"
					pattern="(-?)([0-9]+)([,\\.]{1}[0-9]+)"
					aria-label="Enter the change value for that transaction"
					placeholder="500.00"
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
					<option value="">Please select a category</option>
					{categories.map(category => {
						return (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						);
					})}
				</select>
				<input
					id="income"
					checked={transaction.change > 0}
					type="radio"
					value="income"
					name="transactionType"
					onChange={() => {
						toggleIncomeExpense();
					}}
				/>
				<label htmlFor="income">Income</label>
				<input
					id="expense"
					checked={transaction.change < 0}
					type="radio"
					value="expense"
					name="transactionType"
					onChange={() => {
						toggleIncomeExpense();
					}}
				/>
				<label htmlFor="expense">Expense</label>
				<button type="submit">Submit</button>
			</StyledForm>
			<ToastContainer />
		</>
	);
}
