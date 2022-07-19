import {StyledEditButton, StyledDeleteButton} from '../Button/styled';
import {editIcon, deleteIcon} from '../Icons/Icons';

import {Section, StyledCategory, StyledDate, StyledNote, StyledValue} from './styled';

export default function Transaction(props) {
	return (
		<Section>
			<StyledValue change={props.change}>{props.change} €</StyledValue>
			<StyledDate>{props.date}</StyledDate>
			<StyledNote>{props.note}</StyledNote>
			<StyledCategory>{props.category}</StyledCategory>
			<StyledEditButton type="button" onClick={props.onEdit} aria-label="Edit Transaction">
				{editIcon}
			</StyledEditButton>
			<StyledDeleteButton
				onClick={() => props.deleteTransaction(props.id)}
				aria-label="Delete Transaction"
			>
				{deleteIcon}
			</StyledDeleteButton>
		</Section>
	);
}
