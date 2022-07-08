import styled from 'styled-components';

export const BackButton = styled.button`
	display: flex;
	position: relative;
	align-items: center;
	margin: 2em;
	padding: 2em 1.5em;
	border: none;
	background: none;
	color: white;

	&::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 50%;
		width: 45px;
		height: 45px;
		transform: translateY(-50%) translateX(calc(100% + 4px));
		transition: transform 0.25s 0.25s cubic-bezier(0, 0, 0.5, 2);
		border-radius: 50px;
		background-color: var(--gradient1);
	}

	&:hover::before {
		width: 100%;
		transform: translateY(-50%) translateX(-18px);
		transition: transform 0.25s cubic-bezier(0, 0, 0.5, 2),
			width 0.25s 0.25s cubic-bezier(0, 0, 0.5, 2);
	}
`;
