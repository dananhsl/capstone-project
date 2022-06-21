import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import BankAccounts from '.';

describe('Bank Accounts', () => {
	it('should render correctly', () => {
		const accountName = 'Konto A';
		const bankName = 'Bank XY';
		const accountValue = '21983€';
		render(<BankAccounts>{(accountName, bankName, accountValue)}</BankAccounts>);
		const bankAccounts = screen.getByText(accountName, bankName, accountValue);
		expect(bankAccounts).toBeInTheDocument();
	});
});
