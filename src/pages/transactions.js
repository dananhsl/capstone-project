import Button from '../components/Button';
import AccountBalance from '../components/Transaction/AccountBalance';
import Transactions from '../components/Transaction/Transactions';

export default function TransactionHistory() {
	return (
		<>
			<h1>Your recent transactions:</h1>
			<Button />
			<AccountBalance />
			<Transactions />
		</>
	);
}
