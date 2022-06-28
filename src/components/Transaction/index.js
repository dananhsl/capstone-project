import {Section} from './styled';

export default function Transaction(props) {
	return (
		<Section>
			<h2>{props.change} €</h2>
			<h3>{props.date}</h3>
			<p>{props.note}</p>
		</Section>
	);
}
