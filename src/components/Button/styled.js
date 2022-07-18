import styled from 'styled-components';

export const StyledBackBtn = styled.button`
	display: flex;
	position: relative;
	align-items: center;
	margin: 1em;
	padding: 0.5em;
	border: 1.5px solid white;
	border-radius: 15px;
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
