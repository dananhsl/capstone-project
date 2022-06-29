import Button from '../components/Button';
import Transactions from '../components/Transaction/Transactions';

export default function TransactionHistory() {
	return (
		<>
			<h1>Your recent transactions:</h1>
			<Button />
			<Transactions />
		</>
	);
}
