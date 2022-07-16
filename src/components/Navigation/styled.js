import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.ul`
	display: flex;
	position: absolute;
	z-index: 1;
	top: 0;
	right: 5%;
	flex-direction: column;
	margin-bottom: 2em;
	padding: 1em;
	animation: fade 0.5s ease-in-out;
	border: 2px solid var(--textcolor);
	border-radius: 20px;
	background: var(--bgcolor);
	box-shadow: 0 5px 5px black;

	@keyframes fade {
		from {
			transform: translateX(200px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;

export const StyledNavLink = styled(NavLink)`
	display: block;
	width: 100%;
	padding: 14px 20px;
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
	z-index: 2;
	right: 5%;
	width: 2em;
	height: 2em;
`;
