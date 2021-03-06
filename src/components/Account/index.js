import {useSortable} from '@dnd-kit/sortable';

import {StyledDeleteButton, StyledEditButton} from '../Button/styled';
import {deleteIcon, editIcon} from '../Icons/Icons';

import {
	Article,
	DragHandle,
	Content,
	StyledAccountName,
	StyledBalance,
	StyledBankName,
	TransactionsButton,
} from './styled';

export default function Account(props) {
	const {setNodeRef, attributes, listeners, transition, transform, isDragging} = useSortable({
		id: props.id,
	});
	const style = {
		transition,
		transform: `translate3d(0, ${transform?.y || 0}px, 0)`,
		opacity: isDragging ? 0.5 : 1,
	};
	return (
		<>
			<Article style={style}>
				<DragHandle ref={setNodeRef} {...attributes} {...listeners} />
				<Content>
					<StyledAccountName>{props.accountName}</StyledAccountName>
					<StyledBankName>{props.bankName}</StyledBankName>
					<StyledBalance>{props.value} €</StyledBalance>
					<TransactionsButton
						type="button"
						onClick={props.onNavigate}
						aria-label="Navigate To Transactions"
					>
						Transactions
					</TransactionsButton>
					<StyledEditButton
						type="button"
						onClick={props.onEdit}
						aria-label="Edit Account Details"
					>
						{editIcon}
					</StyledEditButton>
					<StyledDeleteButton
						type="button"
						onClick={props.onDelete}
						aria-label="Delete Account"
					>
						{deleteIcon}
					</StyledDeleteButton>
				</Content>
			</Article>
		</>
	);
}
