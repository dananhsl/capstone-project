import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 3em;
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
	gap: 1em;
	padding: 1em;
	border-radius: 30px;
`;

export const StyledLabel = styled.label`
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 80%) 4px 4px 15px;
	font-size: 1.5rem;
`;

export const StyledInput = styled.input`
	padding: 0.5em;
	border: 1px solid white;
	border-radius: 15px;
	box-shadow: rgb(0 0 0 / 80%) 4px 4px 15px;
	font-size: 1.5rem;
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
	color: black;
	font-size: 1.5em;
	font-weight: 400;
	cursor: pointer;
`;
