import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore';

import Transaction from './index.js';

export default function Transactions() {
	useStore(state => state.transactions);
	const {accountID} = useParams();
	const getAccountWithData = useStore(state => state.getAccountWithData);
	const getTransactionWithData = useStore(state => state.getTransactionWithData);
	const account = getAccountWithData(accountID);
	const navigate = useNavigate();
	const deleteTransaction = useStore(state => state.deleteTransaction);
	const filterAccountTransactions = useStore(state => state.filterAccountTransactions);
	const transactionsFiltered = useStore(state => state.transactionsFiltered);
	const categories = useStore(state => state.categories);
	const transactionSelector =
		transactionsFiltered.length === 0 ? account.Transactions : transactionsFiltered;
	return (
		<>
			<input
				id="date"
				onChange={event => {
					filterAccountTransactions(account, '', event.target.value);
				}}
				type="date"
				aria-label="Enter the date of the transaction"
			></input>
			<select
				id="categorieMenu"
				onChange={event => {
					filterAccountTransactions(account, event.target.value, '');
				}}
			>
				<option value={''}>All</option>s
				{categories.map(category => {
					return (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					);
				})}
			</select>

			{transactionSelector.map(({id, date, change, note}) => {
				const transaction = getTransactionWithData(id);
				return (
					<Transaction
						key={id}
						date={date}
						change={change}
						note={note}
						category={transaction.Categories[0].name}
						onEdit={() => {
							navigate('/transaction/edit/' + accountID + '/' + id);
						}}
						deleteTransaction={() => {
							deleteTransaction(id);
							navigate('/' + accountID);
						}}
					/>
				);
			})}
		</>
	);
}
