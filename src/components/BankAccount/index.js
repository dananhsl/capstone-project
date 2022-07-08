import {useSortable} from '@dnd-kit/sortable';

import {Section, DragHandle, Content} from './styled';

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
			<Section style={style}>
				<DragHandle ref={setNodeRef} {...attributes} {...listeners} />
				<Content>
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
				</Content>
			</Section>
		</>
	);
}
