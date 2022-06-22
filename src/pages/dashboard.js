import BankAccount from '../components/BankAccount/index.js';
import db from '../db.js';

export default function Dashboard() {
	return (
		<>
			<h1>Dashboard</h1>
			{db.map(({id, accountName, bankName, accountValue}) => {
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
