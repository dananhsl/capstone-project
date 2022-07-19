import {StyledNavLink, StyledNavContainer} from './styled';

export default function NavigationLinks({closeMenu}) {
	return (
		<StyledNavContainer>
			<StyledNavLink to="/" onClick={closeMenu}>
				<li>Dashboard</li>
			</StyledNavLink>
			<StyledNavLink to="/account/add" onClick={closeMenu}>
				<li>New BankAccount</li>
			</StyledNavLink>
			<StyledNavLink to="/analysis" onClick={closeMenu}>
				<li>Analysis</li>
			</StyledNavLink>
		</StyledNavContainer>
	);
}
