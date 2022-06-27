import {NavLink} from 'react-router-dom';

export default function NavigationLinks() {
	return (
		<ul>
			<NavLink to="/">
				<li>Dashboard</li>
			</NavLink>
			<NavLink to="newBankaccount">
				<li>Add New BankAccount</li>
			</NavLink>
		</ul>
	);
}
