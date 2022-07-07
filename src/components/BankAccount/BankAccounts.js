import {closestCenter, DndContext, PointerSensor, useSensor} from '@dnd-kit/core';
import {arrayMove, SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore';

import BankAccount from './index.js';

export default function BankAccounts() {
	const accounts = useStore(state => state.accounts);

	const deleteBankaccount = useStore(state => state.deleteBankaccount);
	const navigate = useNavigate();
	const sensors = [useSensor(PointerSensor)];
	const [items, setItems] = useState([...accounts]);

	const handleDragEnd = ({active, over}) => {
		if (active.id !== over.id) {
			setItems(items => {
				const oldIndex = items.findIndex(item => item.id === active.id);
				const newIndex = items.findIndex(item => item.id === over.id);
				return arrayMove(items, oldIndex, newIndex);
			});
		}
	};
	return (
		<>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<SortableContext
					items={items.map(item => item.id)}
					strategy={verticalListSortingStrategy}
				>
					{items.map(({id, name, bankName, value}) => {
						return (
							<BankAccount
								key={id}
								id={id}
								accountName={name}
								bankName={bankName}
								value={value}
								onDelete={() => {
									deleteBankaccount(id);
								}}
								onNavigate={() => {
									navigate('/' + id);
								}}
								onEdit={() => {
									navigate('/bankAccount/edit/' + id);
								}}
							/>
						);
					})}
				</SortableContext>
			</DndContext>
		</>
	);
}
