import {Routes, Route} from 'react-router-dom';

import Accounts from './components/Account/Accounts';
import Analysis from './components/Analysis';
import FormAccount from './components/InputForms/FormAccount';
import FormTransaction from './components/InputForms/FormTransaction';
import MobileNavigation from './components/Navigation/MobileNavigation';
import TransactionHistory from './pages/transactions';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<MobileNavigation />
			<Routes>
				<Route path="/" element={<Accounts />} />
				<Route path="/account/add" element={<FormAccount />} />
				<Route path="/:accountID" element={<TransactionHistory />} />
				<Route path="/account/edit/:accountID" element={<FormAccount />} />
				<Route
					path="/transaction/edit/:accountID/:transactionID"
					element={<FormTransaction />}
				/>

				<Route path="/transaction/add/:accountID" element={<FormTransaction />} />
				<Route path="/analysis" element={<Analysis />} />
			</Routes>
		</>
	);
}
