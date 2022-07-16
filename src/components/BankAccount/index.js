import {useSortable} from '@dnd-kit/sortable';

import {
	Article,
	DragHandle,
	Content,
	StyledAccountName,
	StyledBalance,
	StyledBankName,
	TransactionsButton,
	DeleteButton,
	EditButton,
} from './styled';

export default function BankAccount(props) {
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
					<TransactionsButton type="button" onClick={props.onNavigate}>
						Transactions
					</TransactionsButton>
					<EditButton type="button" onClick={props.onEdit}>
						Edit
					</EditButton>
					<DeleteButton type="button" onClick={props.onDelete}>
						Delete
					</DeleteButton>
				</Content>
			</Article>
		</>
	);
}
