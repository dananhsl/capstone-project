import {StyledCatButton} from '../Button/styled';
import {editIcon, deleteIcon} from '../Icons/Icons';

import {Section} from './styled';

export default function Transaction(props) {
	return (
		<Section>
			<h2>{props.change} €</h2>
			<h3>{props.date}</h3>
			<p>{props.note}</p>
			<p>{props.category}</p>
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
