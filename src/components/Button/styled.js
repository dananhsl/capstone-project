import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 0.5px;
	background: #fae;
	color: #000;
	font-size: 1em;

	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export const StyledCatButton = styled.button`
	padding: 0.5em;
	border: none;
	border-radius: 50%;
	background: linear-gradient(to bottom, var(--gradient1), var(--gradient2));
`;

export default StyledButton;
