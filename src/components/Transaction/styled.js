import styled from 'styled-components';

export const Section = styled.section`
	position: relative;
	z-index: 0;
	margin: 20px 100px;
	padding: 10px;
	border: 1px solid var(--bgcolor);
	border-radius: 30px;
	background: linear-gradient(to bottom, var(--blue), var(--bgcolor));
	box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.8);
	color: white;

	@media only screen and (max-width: 600px) {
		margin: 20px 20px;
	}
`;

export const StyledValue = styled.h2`
	${({change}) => (change < 0 ? `color: var(--red);` : `color: var(--green);`)}
	margin-top: 0.2em;
	margin-bottom: 0;
	padding: 0;
	font-size: 2.4em;
	font-weight: bold;
`;

export const StyledDate = styled.p`
	position: absolute;
	top: -0.7em;
	padding: 0;
	font-size: 1.2em;
	font-weight: light;
`;

export const StyledNote = styled.h3`
	margin: 0;
	font-family: 'Barlow', serif;
	font-size: 1em;
`;
export const StyledCategory = styled.h3`
	margin: 0;
	font-family: 'Barlow', serif;
	font-size: 1em;
`;

export const AddTransactionButton = styled.button`
	position: sticky;
	bottom: 1em;
	padding: 0.5em;
	border: none;
	border-radius: 50%;
	background: linear-gradient(to bottom, var(--gradient1), var(--gradient2));
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
	text-shadow: white 0.1em 0.1em 0.1em;
`;
