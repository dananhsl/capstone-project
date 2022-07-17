import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2.5em;
	padding: 1em;
	border: 1px solid var(--textcolor);
	border-radius: 30px;
	background: linear-gradient(to bottom, var(--blue), var(--bgcolor));
	box-shadow: rgb(0 0 0 / 80%) 4px 4px 15px;
`;

export const StyledBackBtn = styled.button`
	display: flex;
	position: relative;
	align-items: center;
	margin: 2em;
	padding: 1em;
	border: 1.5px solid white;
	border-radius: 15px;
	background: none;
	color: white;
`;

export const StyledArticle = styled.article`
	display: flex;
	flex-direction: column;
	gap: 1.5em;
	padding: 0 1em;
	border-radius: 30px;
`;

export const StyledLabel = styled.label`
	font-size: 1.5rem;
	text-shadow: rgb(0 0 0 / 80%) 4px 4px 15px;
`;

export const StyledInput = styled.input`
	padding: 0.5em;
	border: 1px solid white;
	border-radius: 15px;
	box-shadow: rgb(0 0 0 / 80%) 4px 4px 15px;
	font-size: 1.2rem;
	text-align: center;
`;

export const StyledSelect = styled.select`
	padding: 0.5em;
	border: 1px solid white;
	border-radius: 15px;
	box-shadow: rgb(0 0 0 / 80%) 4px 4px 15px;
	font-size: 1.2rem;
	text-align: center;
`;

export const StyledSubmitBtn = styled.button`
	all: unset;
	align-self: center;
	width: 6em;
	margin-bottom: 1em;
	padding: 0.5em;
	border-radius: 15px;
	background: linear-gradient(180deg, var(--gradient1), var(--gradient2), var(--gradient1));
	box-shadow: rgb(0 0 0 / 80%) 4px 4px 15px;
	color: black;
	font-size: 1.5em;
	font-weight: 500;
	cursor: pointer;
`;

export const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;
