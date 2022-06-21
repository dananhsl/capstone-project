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
	}

	html {
		font-size: 16px;
	}

	body {
		background-color: var(--bgcolor);
		margin: 0 auto;
		padding: 0;
		font-size: 1rem;
		width: 400px;
		color: var(--textcolor);
		text-align: center;
	}
	
	
`;
