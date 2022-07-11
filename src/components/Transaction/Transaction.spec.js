import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Transaction from './';

const change = 42.42;
const date = '2022-07-07';
const note = 'cloth';
const category = 'hobbies and free time';

describe('Transaction', () => {
	it('should render correctly', () => {
		render(
			<Transaction change={change} date={date} note={note} category={category}></Transaction>
		);
		const changeTest = screen.getByText(change + ' €');
		const dateTest = screen.getByText(date);
		const noteTest = screen.getByText(note);
		const categoryTest = screen.getByText(category);
		const editButton = screen.getByRole('button', {name: 'Edit'});
		const deleteButton = screen.getByRole('button', {name: 'Delete'});
		expect(changeTest).toBeInTheDocument();
		expect(dateTest).toBeInTheDocument();
		expect(noteTest).toBeInTheDocument();
		expect(categoryTest).toBeInTheDocument();
		expect(editButton).toBeInTheDocument();
		expect(deleteButton).toBeInTheDocument();
	});
	it('should allow clicks on edit-button ', async () => {
		const handleClick = jest.fn();
		render(
			<Transaction
				change={change}
				date={date}
				note={note}
				category={category}
				onEdit={handleClick}
			></Transaction>
		);
		const editButton = screen.getByRole('button', {name: 'Edit'});
		await userEvent.click(editButton);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	it('should allow clicks on delete-button ', async () => {
		const handleClick = jest.fn();
		render(
			<Transaction
				change={change}
				date={date}
				note={note}
				category={category}
				deleteTransaction={handleClick}
			></Transaction>
		);
		const deleteButton = screen.getByRole('button', {name: 'Delete'});
		await userEvent.click(deleteButton);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
