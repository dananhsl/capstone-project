import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Account from '.';
const account = 'Konto A';
const bankName = 'Bank XY';
const value = 2198.42;
describe('Bank Account', () => {
	it('should render correctly', () => {
		render(<Account accountName={account} bankName={bankName} value={value} />);

		const accountTest = screen.getByText(account);
		const bankNameTest = screen.getByText(bankName);
		const valueTest = screen.getByText(value + ' €');
		const transactionsButton = screen.getByRole('button', {name: 'Navigate To Transactions'});
		const editButton = screen.getByRole('button', {name: 'Edit Account Details'});
		const deleteButton = screen.getByRole('button', {name: 'Delete Account'});

		expect(accountTest).toBeInTheDocument();
		expect(bankNameTest).toBeInTheDocument();
		expect(valueTest).toBeInTheDocument();
		expect(transactionsButton).toBeInTheDocument();
		expect(editButton).toBeInTheDocument();
		expect(deleteButton).toBeInTheDocument();
	});
	it('should allow click on transactions-button', async () => {
		const handleClick = jest.fn();
		render(
			<Account
				accountName={account}
				bankName={bankName}
				value={value}
				onNavigate={handleClick}
			/>
		);
		const transactionsButton = screen.getByRole('button', {name: 'Navigate To Transactions'});
		await userEvent.click(transactionsButton);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	it('should allow click on edit-button', async () => {
		const handleClick = jest.fn();
		render(
			<BankAccount
				accountName={account}
				bankName={bankName}
				value={value}
				onEdit={handleClick}
			/>
		);
		const editButton = screen.getByRole('button', {name: 'Edit Account Details'});
		await userEvent.click(editButton);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	it('should allow click on delete-button', async () => {
		const handleClick = jest.fn();
		render(
			<Account
				accountName={account}
				bankName={bankName}
				value={value}
				onDelete={handleClick}
			/>
		);
		const deleteButton = screen.getByRole('button', {name: 'Delete Account'});
		await userEvent.click(deleteButton);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
