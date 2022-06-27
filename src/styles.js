import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	
	:root{
		--bgcolor: #141938;
		--blue: #355c7d;
		--textcolor: #fff;
		--gradient1: #e78800;
		--gradient2: #e5ef1a;
		--green: #00E087;
		--red: #DE3232
		--darkgray: #2f4f4f;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0 20px;
		padding: 0;
		background-color: var(--bgcolor);
		color: var(--textcolor);
		font-size: 1rem;
		text-align: center;
	}
	
	
`;
