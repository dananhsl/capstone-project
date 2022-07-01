import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import BankAccount from '.';

describe('Bank Account', () => {
	it('should render correctly', () => {
		const accountName = 'Konto A';
		const bankName = 'Bank XY';
		const accountValue = 21983;
		render(
			<BankAccount
				accountName={accountName}
				bankName={bankName}
				accountValue={accountValue}
			/>
		);
		const aName = screen.getByText(accountName);
		const bName = screen.getByText(bankName);
		const balance = screen.getByText('21983 €');
		expect(aName).toBeInTheDocument();
		expect(bName).toBeInTheDocument();
		expect(balance).toBeInTheDocument();
	});
});
