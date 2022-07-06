import {Section} from './styled';

export default function BankAccount(props) {
	return (
		<>
			<Section>
				<h2>{props.accountName}</h2>
				<h3>{props.bankName}</h3>
				<p>{props.value} €</p>
				<button type="button" onClick={props.onNavigate}>
					Transactions
				</button>
				<button type="button" onClick={props.onEdit}>
					Edit
				</button>
				<button type="button" onClick={props.onDelete}>
					Delete
				</button>
			</Section>
		</>
	);
}
