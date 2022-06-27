import BankAccount from '../components/BankAccount/index.js';
import NavigationButton from '../components/Navigation/NavigationButton.js';

export default function Dashboard() {
	return (
		<>
			<NavigationButton />
			<h1>Dashboard</h1>
			<BankAccount />
		</>
	);
}
