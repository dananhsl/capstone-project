import BankAccount from '../components/BankAccount/index.js';
import useStore from '../hooks/useStore.js';

export default function Dashboard() {
	const bankAccounts = useStore(state => state.db);
	return (
		<>
			<h1>Dashboard</h1>
			{bankAccounts.map(({id, accountName, bankName, accountValue}) => {
				return (
					<BankAccount
						key={id}
						accountName={accountName}
						bankName={bankName}
						accountValue={accountValue}
					></BankAccount>
				);
			})}
		</>
	);
}
