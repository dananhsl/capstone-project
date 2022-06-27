import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	top: 0;
	right: 5%;
	margin-bottom: 2em;
	padding: 1em;
	border: 3px solid var(--blue);
	border-radius: 20px;
	box-shadow: 5px 5px 5px var(--darkgray);
`;

export const StyledNavLink = styled(NavLink)`
	list-style: none;
	color: var(--textcolor);
	text-decoration: none;

	&:hover {
		transform: scale(1.2);
		color: var(--gradient2);
	}
	&.active {
		transform: scale(1.2);
		color: var(--gradient1);
	}
`;

export const Icon = styled.svg`
	position: absolute;
	width: 2em;
	height: 2em;
	right: 5%;
`;
