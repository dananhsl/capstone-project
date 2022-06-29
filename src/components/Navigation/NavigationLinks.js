import {StyledNavLink, NavContainer} from './styled';

export default function NavigationLinks({closeMenu}) {
	return (
		<NavContainer>
			<StyledNavLink to="/" onClick={closeMenu}>
				<li>Dashboard</li>
			</StyledNavLink>
			<StyledNavLink to="newBankaccount" onClick={closeMenu}>
				<li>New BankAccount</li>
			</StyledNavLink>
			<StyledNavLink to="transactionhistory" onClick={closeMenu}>
				<li>Transactions</li>
			</StyledNavLink>
		</NavContainer>
	);
}
