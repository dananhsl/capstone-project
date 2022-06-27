import {Routes, Route} from 'react-router-dom';

import NavigationLinks from './components/Navigation/NavigationLinks';
import Dashboard from './pages/dashboard';
import FormBankAccount from './pages/formBankAccount';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<NavigationLinks />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/newBankaccount" element={<FormBankAccount />} />
			</Routes>
		</>
	);
}
