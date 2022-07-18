import styled from 'styled-components';

export const StyledBackBtn = styled.button`
	position: absolute;
	top: 0.7em;
	left: 1.3em;
	align-items: center;
	margin: 1em;
	border: 1.5px solid white;
	border-radius: 10px;
	background: none;
	color: white;
`;

export const StyledEditButton = styled.button`
	position: absolute;
	top: 0.7em;
	right: 0.8em;
	margin: 0;
	padding: 0.5em;
	border: none;
	border-radius: 50%;
	background: linear-gradient(to bottom, var(--gradient1), var(--gradient2));
`;

export const StyledDeleteButton = styled.button`
	position: absolute;
	right: 0.8em;
	bottom: 1em;
	margin: 0;
	padding: 0.5em;
	border: none;
	border-radius: 50%;
	background: linear-gradient(to bottom, var(--gradient1), var(--gradient2));
`;
