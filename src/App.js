import Dashboard from './pages/dashboard';
import FormBankAccount from './pages/formBankAccount';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Dashboard />
			<FormBankAccount />
		</>
	);
}
