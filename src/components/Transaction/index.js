import {Section} from './styled';

export default function Transaction(props) {
	return (
		<Section>
			<h1>{props.id}</h1>
			<h2>{props.change} €</h2>
			<h3>{props.date}</h3>
			<p>{props.note}</p>
			<p>{props.category}</p>
			<button type="button" onClick={props.onEdit}>
				Edit
			</button>
			<button onClick={() => props.deleteTransaction(props.id)}>Delete</button>
		</Section>
	);
}
