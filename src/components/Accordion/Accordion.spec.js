import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Accordion from './';

describe('Accordion component', () => {
	it('should render children', () => {
		const text = 'Hello World';
		render(<Accordion>{text}</Accordion>);
		// Elements
		const accordion = screen.getByText(text);
		// Expectations
		expect(accordion).toBeInTheDocument();
	});

	it('should allow to be opened', async () => {
		const text = 'Hello World';
		const title = 'Click Me';
		render(
			<Accordion title={title} data-testid={'accordion'}>
				<p data-testid={'content'}>{text}</p>
			</Accordion>
		);
		//Elements
		const accordion = screen.getByTestId('accordion');
		const content = screen.getByTestId('content');
		const summary = screen.getByText(title);

		//Actions
		await userEvent.click(summary);

		//Expectations
		expect(content).toBeVisible();
		expect(accordion).toHaveAttribute('open');
	});

	it('should allow to be closed', async () => {
		const text = 'Hello World';
		const title = 'Click Me';
		render(
			<Accordion open title={title} data-testid={'accordion'}>
				<p data-testid={'content'}>{text}</p>
			</Accordion>
		);
		//Elements
		const accordion = screen.getByTestId('accordion');
		const content = screen.getByTestId('content');
		const summary = screen.getByText(title);

		//Actions
		await userEvent.click(summary);

		//Expectations
		expect(content).not.toBeVisible();
		expect(accordion).not.toHaveAttribute('open');
	});

	it('should allow to be toggled', async () => {
		const text = 'Hello World';
		const title = 'Click Me';
		render(
			<Accordion title={title} data-testid={'accordion'}>
				<p data-testid={'content'}>{text}</p>
			</Accordion>
		);
		//Elements
		const accordion = screen.getByTestId('accordion');
		const content = screen.getByTestId('content');
		const summary = screen.getByText(title);

		//Actions
		await userEvent.click(summary);

		//Expectations
		expect(content).toBeVisible();
		expect(accordion).toHaveAttribute('open');

		//Actions
		await userEvent.click(summary);

		//Expectations
		expect(content).not.toBeVisible();
		expect(accordion).not.toHaveAttribute('open');
	});
});
