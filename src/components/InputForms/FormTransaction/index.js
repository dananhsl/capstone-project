import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import useStore from '../../../hooks/useStore';
import {StyledBackBtn} from '../../Button/styled.js';
import {backIcon} from '../../Icons/Icons';
import {notifyAdd, notifyEdit} from '../../Toasts/Toasts';
import {
	StyledForm,
	StyledArticle,
	StyledLabel,
	StyledInput,
	StyledSubmitBtn,
	StyledDiv,
	StyledSelect,
} from '../styled';

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
			<h1>Transaction</h1>
			<StyledBackBtn
				type="button"
				onClick={() => {
					navigate('/' + accountID);
				}}
				aria-label="Back Button"
			>
				{backIcon}
			</StyledBackBtn>
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
				aria-label="Add a new Transaction"
			>
				<StyledArticle>
					<StyledLabel htmlFor="date">Date</StyledLabel>
					<StyledInput
						id="date"
						value={transaction.date}
						onChange={event => {
							setTransaction({...transaction, date: event.target.value});
						}}
						type="date"
						aria-label="Enter Date of the transaction"
						data-testid="datepicker"
						placeholder="e.g 29.06.2022"
					></StyledInput>
				</StyledArticle>

				<StyledArticle>
					<StyledLabel htmlFor="changeValue">Value Change</StyledLabel>
					<StyledInput
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
						aria-label="Enter Value change for the transaction"
						data-testid="changevalue"
						placeholder="500.00"
					></StyledInput>
				</StyledArticle>

				<StyledArticle>
					<StyledLabel htmlFor="note">Note</StyledLabel>
					<StyledInput
						id="note"
						value={transaction.note}
						onChange={event => {
							setTransaction({...transaction, note: event.target.value});
						}}
						type="text"
						aria-label="Enter decribtive note for the transaction"
						data-testid="note"
						placeholder="e.g. online shopping"
					></StyledInput>
				</StyledArticle>

				<StyledArticle>
					<StyledLabel htmlFor="categorieMenu">Category</StyledLabel>

					<StyledSelect
						id="categorieMenu"
						onChange={event => {
							setTransaction({
								...transaction,
								categoryId: event.target.value,
							});
						}}
						aria-label="Select a Category for the Transcation"
						data-testid="category"
					>
						<option value="" style={{background: 'hotpink'}}>
							Please select a category
						</option>
						{categories.map(category => {
							return (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							);
						})}
					</StyledSelect>
				</StyledArticle>
				<StyledDiv>
					<input
						id="income"
						checked={transaction.change > 0}
						type="radio"
						value="income"
						name="transactionType"
						aria-label="set income"
						data-testid="income"
						onChange={() => {
							toggleIncomeExpense();
						}}
					/>
					<StyledLabel htmlFor="income">Income</StyledLabel>

					<input
						id="expense"
						checked={transaction.change < 0}
						type="radio"
						value="expense"
						name="transactionType"
						aria-label="set expense"
						data-testid="expense"
						onChange={() => {
							toggleIncomeExpense();
						}}
					/>
					<StyledLabel htmlFor="expense">Expense</StyledLabel>
				</StyledDiv>

				<StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
			</StyledForm>
			<ToastContainer />
		</>
	);
}
