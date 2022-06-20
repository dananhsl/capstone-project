import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import InputLabel from './';

describe('InputLabel component', () => {
	it('should render children', () => {
		const text = 'I am a Label';
		render(<InputLabel>{text}</InputLabel>);
		const label = screen.getByText(text);
		expect(label).toBeInTheDocument();
	});
});
