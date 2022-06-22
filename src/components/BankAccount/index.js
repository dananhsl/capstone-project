import {Section} from './styled';

export default function BankAccount({accountName, bankName, accountValue}) {
	return (
		<Section>
			<h2>{accountName}</h2>
			<h3>{bankName}</h3>
			<p>{accountValue} €</p>
		</Section>
	);
}
