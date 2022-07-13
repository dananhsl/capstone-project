import {useParams} from 'react-router-dom';

import useStore from '../../hooks/useStore';

export default function AccountBalance() {
	const {accountID} = useParams();
	const getAccountWithData = useStore(state => state.getAccountWithData);
	const account = getAccountWithData(accountID);
	return <h2>Current Balance: {account.value} €</h2>;
}
