import {
	Section,
	StyledCategory,
	StyledDate,
	StyledNote,
	StyledValue,
	DeleteButton,
	EditButton,
} from './styled';

export default function Transaction(props) {
	return (
		<Section>
			<StyledValue change={props.change}>{props.change} €</StyledValue>
			<StyledDate>{props.date}</StyledDate>
			<StyledNote>{props.note}</StyledNote>
			<StyledCategory>{props.category}</StyledCategory>
			<EditButton type="button" onClick={props.onEdit}>
				Edit
			</EditButton>
			<DeleteButton onClick={() => props.deleteTransaction(props.id)}>Delete</DeleteButton>
		</Section>
	);
}
