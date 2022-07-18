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
		--red: #DE3232;
		--darkgray: #2f4f4f;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0 20px;
		padding: 0;
		background: linear-gradient(90deg, var(--bgcolor), var(--blue), var(--bgcolor));
		color: var(--textcolor);
		font-family: 'Bebas Neue', cursive;
		text-align: center;
	}
	
	
`;
