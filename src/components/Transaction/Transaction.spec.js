import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Transaction from './';

const change = 42.42;
const date = '2022-07-07';
const note = 'cloth';
const category = 'hobbies and free time';
const editTxt = 'Edit';
const deleteTxt = 'Delete';

describe('Transaction', () => {
	it('should render correctly', () => {
		render(
			<Transaction change={change} date={date} note={note} category={category}>
				<button>{editTxt}</button>
				<button>{deleteTxt}</button>
			</Transaction>
		);
		const changeTest = screen.getByText(change + ' €');
		const dateTest = screen.getByText(date);
		const noteTest = screen.getByText(note);
		const categoryTest = screen.getByText(category);
		const editButton = screen.getByText(editTxt);
		const deleteButton = screen.getByText(deleteTxt);
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
			>
				<button onClick={handleClick}>{editTxt}</button>
				<button>{deleteTxt}</button>
			</Transaction>
		);
		const editButton = screen.getByText(editTxt);
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
			>
				<button>{editTxt}</button>
				<button onClick={handleClick}>{deleteTxt}</button>
			</Transaction>
		);
		const deleteButton = screen.getByText(deleteTxt);
		await userEvent.click(deleteButton);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
