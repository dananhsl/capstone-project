import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import BankAccount from '.';

describe('Bank Account', () => {
	it('should render correctly', () => {
		const accountName = 'Konto A';
		const bankName = 'Bank XY';
		const accountValue = 21983;
		render(
			<BankAccount accountName={accountName} bankName={bankName} accountValue={accountValue}>
				{(accountName, bankName, accountValue)}
			</BankAccount>
		);
		const aName = screen.getByText(accountName, bankName, accountValue);
		const bName = screen.getByText(bankName);
		expect(aName).toBeInTheDocument();
		expect(bName).toBeInTheDocument();
		expect(screen.getByText('21983 €')).toBeInTheDocument();
	});
});
