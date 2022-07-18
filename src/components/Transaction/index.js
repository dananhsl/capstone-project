import {
	Section,
	StyledCategory,
	StyledDate,
	StyledNote,
	StyledValue,
} from './styled';
import {StyledCatButton} from '../Button/styled';
import {editIcon, deleteIcon} from '../Icons/Icons';

import {Section} from './styled';

export default function Transaction(props) {
	return (
		<Section>

			<StyledValue change={props.change}>{props.change} €</StyledValue>
			<StyledDate>{props.date}</StyledDate>
			<StyledNote>{props.note}</StyledNote>
			<StyledCategory>{props.category}</StyledCategory>
			<StyledCatButton
				type="button"
				onClick={props.onEdit}
				aria-label="Edit Transaction Details"
			>
				{editIcon}
			</StyledCatButton>
			<StyledCatButton
				onClick={() => props.deleteTransaction(props.id)}
				aria-label="Delete Transaction "
			>
				{deleteIcon}
			</StyledCatButton>
		</Section>
	);
}
