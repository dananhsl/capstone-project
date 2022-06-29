import {Routes, Route} from 'react-router-dom';

import MobileNavigation from './components/Navigation/MobileNavigation';
import Dashboard from './pages/dashboard';
import FormBankAccount from './pages/formBankAccount';
import TransactionHistory from './pages/transactions';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<MobileNavigation />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/newBankaccount" element={<FormBankAccount />} />
				<Route path="/:accountID" element={<TransactionHistory />} />
			</Routes>
		</>
	);
}
