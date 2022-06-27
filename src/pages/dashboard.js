import BankAccount from '../components/BankAccount/index.js';
import NavigationButton from '../components/Navigation/NavigationButton.js';

export default function Dashboard() {
	return (
		<>
			<h1>Dashboard</h1>

			<BankAccount />
			<NavigationButton />
		</>
	);
}
