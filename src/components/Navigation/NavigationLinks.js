import {StyledNavLink, NavContainer} from './styled';

export default function NavigationLinks({closeMenu}) {
	return (
		<NavContainer>
			<StyledNavLink to="/" onClick={closeMenu}>
				<li>Dashboard</li>
			</StyledNavLink>
			<StyledNavLink to="/bankAccount/add" onClick={closeMenu}>
				<li>New BankAccount</li>
			</StyledNavLink>
		</NavContainer>
	);
}
