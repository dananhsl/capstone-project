import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter as Router} from 'react-router-dom';

import FormAccount from '.';

describe('Form Account', () => {
	it('should render correctly', () => {
		render(
			<Router>
				<FormAccount />
			</Router>
		);
		const header = screen.getByText('Your Account');
		const backBtn = screen.getByRole('button', {name: 'Back Button'});
		const submitBtn = screen.getByRole('button', {name: 'Submit'});

		const dateLabel = screen.getByText('Date');
		const noteLabel = screen.getByText('Note');
		const bankNameLabel = screen.getByText('Bank Name');
		const valueLabel = screen.getByText('changeValue');
		const accountIn = screen.getByRole('textbox', {name: 'Name your account'});
		const bankIn = screen.getByRole('textbox', {name: 'Name according bank'});
		const balanceIn = screen.getByRole('textbox', {name: 'Enter current Balance'});

		expect(header).toBeInTheDocument();
		expect(backBtn).toBeInTheDocument();
		expect(submitBtn).toBeInTheDocument();

		expect(dateLabel).toBeInTheDocument();
		expect(noteLabel).toBeInTheDocument();
		expect(bankNameLabel).toBeInTheDocument();
		expect(valueLabel).toBeInTheDocument();
		expect(accountIn).toBeInTheDocument();
		expect(bankIn).toBeInTheDocument();
		expect(balanceIn).toBeInTheDocument();
	});
	it('should allow clicks on back button', async () => {
		const handleClick = jest.fn();
		render(
			<Router>
				<FormAccount onClick={handleClick} />
			</Router>
		);
		const backBtn = screen.getByRole('button', {name: 'Back Button'});
		await userEvent.click(backBtn);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	it('should allow clicks on submit button', async () => {
		const handleClick = jest.fn();
		render(
			<Router>
				<FormAccount onSubmit={handleClick} />
			</Router>
		);
		const submitBtn = screen.getByRole('button', {name: 'Submit'});
		await userEvent.click(submitBtn);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
