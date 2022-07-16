import styled from 'styled-components';

export const Article = styled.article`
	position: relative;
	z-index: 0;
	margin: 20px 100px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 30px;
	background: linear-gradient(to bottom, var(--blue), var(--bgcolor));
	box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.8);
	color: white;

	@media only screen and (max-width: 600px) {
		margin: 20px 20px;
	}
`;

export const StyledAccountName = styled.h2`
	margin-top: 0.2em;
	margin-bottom: 0;
	padding: 0;
	font-size: 2em;
	font-weight: bold;
	text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const StyledBalance = styled.p`
	margin: 0.5em;
	padding: 0;
	font-size: 2.4em;
	font-weight: bold;
`;

export const StyledBankName = styled.h3`
	margin: 0;
	font-family: 'Barlow', serif;
	font-size: 1em;
`;

export const TransactionsButton = styled.button`
	all: unset;
	padding: 0.3em;
	border-radius: 10px;
	background: linear-gradient(180deg, var(--gradient1), var(--gradient2), var(--gradient1));
	color: black;
	cursor: pointer;
	&:active {
		color: var(--textcolor);
	}
`;

export const EditButton = styled.button`
	position: absolute;
	top: 0.5em;
	right: 1.3em;
`;

export const DeleteButton = styled.button`
	position: absolute;
	right: 0.3em;
`;

export const DragHandle = styled.div`
	position: absolute;
	inset: 0;
	z-index: -1;
`;

export const Content = styled.div`
	position: relative;
	pointer-events: none;
	input,
	select,
	button {
		pointer-events: auto;
	}
`;
