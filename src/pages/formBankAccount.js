import AddNewBankAccount from '../components/AddNewAccount';
import NavigationButton from '../components/Navigation/NavigationButton';

export default function FormBankAccount() {
	return (
		<>
			<NavigationButton />
			<h1>Add a new Bank Account</h1>
			<AddNewBankAccount />
		</>
	);
}
