import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter as Router} from 'react-router-dom';

import FormTransaction from '.';

describe('Form Transaction', () => {
	it('should render correctly', () => {
		render(
			<Router>
				<FormTransaction />
			</Router>
		);
		const header = screen.getByText('Transaction');
		const backBtn = screen.getByRole('button', {name: 'Back Button'});
		const submitBtn = screen.getByRole('button', {name: 'Submit'});

		const dateLabel = screen.getByText('Date');
		const valueLabel = screen.getByText('Value Change');
		const noteLabel = screen.getByText('Note');
		const categoryLabel = screen.getByText('Category');
		const incomeLabel = screen.getByText('Income');
		const expenseLabel = screen.getByText('Expense');

		const dateIn = screen.getByTestId('datepicker');
		const valueIn = screen.getByTestId('changevalue');
		const noteIn = screen.getByTestId('note');
		const categoryIn = screen.getByTestId('category');
		const incomeIn = screen.getByTestId('income');
		const expenseIn = screen.getByTestId('expense');

		expect(header).toBeInTheDocument();
		expect(backBtn).toBeInTheDocument();
		expect(submitBtn).toBeInTheDocument();

		expect(dateLabel).toBeInTheDocument();
		expect(valueLabel).toBeInTheDocument();
		expect(noteLabel).toBeInTheDocument();
		expect(categoryLabel).toBeInTheDocument();
		expect(incomeLabel).toBeInTheDocument();
		expect(expenseLabel).toBeInTheDocument();

		expect(dateIn).toBeInTheDocument();
		expect(valueIn).toBeInTheDocument();
		expect(noteIn).toBeInTheDocument();
		expect(categoryIn).toBeInTheDocument();
		expect(incomeIn).toBeInTheDocument();
		expect(expenseIn).toBeInTheDocument();
	});
});
