import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	top: 0;
	justify-content: space-around;

	right: 5%;
	margin-bottom: 2em;
	padding: 1em;
	border: 3px solid var(--blue);
	border-radius: 20px;
	box-shadow: 5px 5px 5px var(--darkgray);
`;

export const StyledNavLink = styled(NavLink)`
	color: var(--textcolor);
	list-style: none;
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
	right: 5%;
	width: 2em;
	height: 2em;
`;
