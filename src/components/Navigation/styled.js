import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 1em;
	margin-bottom: 2em;
	top: 0;
	border: 3px solid var(--blue);
	border-radius: 20px;
	box-shadow: 5px 5px 5px var(--darkgray);
	right: 5%;
`;

export const StyledNavLink = styled(NavLink)`
	list-style: none;
	text-decoration: none;
	color: var(--textcolor);
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
	height: 2em;
	width: 2em;
	position: absolute;
	right: 5%;
`;
