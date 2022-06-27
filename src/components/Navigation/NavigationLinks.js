import {StyledNavLink, Ul} from './styled';

export default function NavigationLinks() {
	return (
		<Ul>
			<StyledNavLink to="/">
				<li>Dashboard</li>
			</StyledNavLink>
			<StyledNavLink to="newBankaccount">
				<li>Add New BankAccount</li>
			</StyledNavLink>
		</Ul>
	);
}
