import styled from 'styled-components';

export const Section = styled.section`
	margin: 20px 150px;
	padding: 10px;
	border: 4px solid var(--blue);
	border-radius: 30px;

	@media only screen and (max-width: 700px) {
		margin: 20px 40px;
	}
`;
