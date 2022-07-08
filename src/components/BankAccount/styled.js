import styled from 'styled-components';

export const Section = styled.section`
	position: relative;
	z-index: 0;
	margin: 20px 100px;
	padding: 10px;
	border: 4px solid var(--blue);
	border-radius: 30px;

	@media only screen and (max-width: 600px) {
		margin: 20px 20px;
	}
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
