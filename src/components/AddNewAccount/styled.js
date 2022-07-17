import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 4em;
	padding: 1em;
	border: 1px solid var(--textcolor);
	border-radius: 30px;
	background: linear-gradient(to bottom, var(--blue), var(--bgcolor));
	box-shadow: rgb(0 0 0 / 80%) 4px 4px 15px;
`;

export const StyledArticle = styled.article`
	border: 1px solid var(--textcolor);
	border-radius: 30px;
`;
