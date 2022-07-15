import Pie from '../components/Analysis';
import BankAccounts from '../components/BankAccount/BankAccounts.js';

export default function Dashboard() {
	return (
		<>
			<h1>Dashboard</h1>
			<Pie />
			<br></br>
			<BankAccounts />
		</>
	);
}
