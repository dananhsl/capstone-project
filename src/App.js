import {Routes, Route} from 'react-router-dom';

import MobileNavigation from './components/Navigation/MobileNavigation';
import Dashboard from './pages/dashboard';
import FormBankAccount from './pages/formBankAccount';
import FormTransaction from './pages/formTransaction';
import TransactionHistory from './pages/transactions';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<MobileNavigation />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/bankAccount/add" element={<FormBankAccount />} />
				<Route path="/:accountID" element={<TransactionHistory />} />
				<Route path="/bankAccount/edit/:accountID" element={<FormBankAccount />} />
				{/* <Route
					path="/transaction/edit/:accountID/:transactionID"
					element={<FormTransaction />}
				/> */}
			</Routes>
		</>
	);
}
