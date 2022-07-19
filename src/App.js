import {Routes, Route} from 'react-router-dom';

import Analysis from './components/Analysis';
import FormAccount from './components/InputForms/FormAccount';
import MobileNavigation from './components/Navigation/MobileNavigation';
import Dashboard from './pages/dashboard';
import FormTransactionPage from './pages/formTransaction';
import TransactionHistory from './pages/transactions';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<MobileNavigation />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/account/add" element={<FormAccount />} />
				<Route path="/:accountID" element={<TransactionHistory />} />
				<Route path="/account/edit/:accountID" element={<FormAccount />} />
				<Route
					path="/transaction/edit/:accountID/:transactionID"
					element={<FormTransactionPage />}
				/>

				<Route path="/transaction/add/:accountID" element={<FormTransactionPage />} />
				<Route path="/analysis" element={<Analysis />} />
			</Routes>
		</>
	);
}
