import {Routes, Route} from 'react-router-dom';

import FormAccount from './components/InputForms/FormAccount';
import MobileNavigation from './components/Navigation/MobileNavigation';
import AnalysisPage from './pages/analysis';
import Dashboard from './pages/dashboard';
//import FormAccountPage from './pages/formAccount';
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
				<Route path="/bankAccount/add" element={<FormAccount />} />
				<Route path="/:accountID" element={<TransactionHistory />} />
				<Route path="/bankAccount/edit/:accountID" element={<FormAccount />} />
				<Route
					path="/transaction/edit/:accountID/:transactionID"
					element={<FormTransactionPage />}
				/>

				<Route path="/transaction/add/:accountID" element={<FormTransactionPage />} />
				<Route path="/analysis" element={<AnalysisPage />} />
			</Routes>
		</>
	);
}
