import {closestCenter, DndContext, PointerSensor, useSensor} from '@dnd-kit/core';
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {useNavigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import useStore from '../../hooks/useStore';
import {notifyDelete} from '../Toasts/Toasts';

import BankAccount from './index.js';

export default function BankAccounts() {
	const accounts = useStore(state => state.accounts);
	const deleteBankaccount = useStore(state => state.deleteBankaccount);
	const navigate = useNavigate();
	const sensors = [useSensor(PointerSensor)];
	const move = useStore(state => state.move);

	const handleDragEnd = ({active, over}) => {
		if (active.id !== over.id) {
			const oldIndex = accounts.findIndex(account => account.id === active.id);
			const newIndex = accounts.findIndex(account => account.id === over.id);
			move(oldIndex, newIndex);
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
					items={accounts.map(account => account.id)}
					strategy={verticalListSortingStrategy}
				>
					{accounts.map(({id, name, bankName, value}) => {
						return (
							<BankAccount
								key={id}
								id={id}
								accountName={name}
								bankName={bankName}
								value={value}
								onDelete={() => {
									deleteBankaccount(id);
									notifyDelete();
								}}
								onNavigate={() => {
									navigate('/' + id);
								}}
								onEdit={() => {
									setTimeout(() => {
										navigate('/bankAccount/edit/' + id);
									}, 2000);
								}}
							/>
						);
					})}
				</SortableContext>
			</DndContext>
			<ToastContainer />
		</>
	);
}
