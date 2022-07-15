import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

import useStore from '../../hooks/useStore';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Analysis() {
	const categories = useStore(state => state.categories);
	const transactions = useStore(state => state.transactions);

	const displayData = categories.map(category => {
		const transactions_ = transactions.filter(transaction =>
			category.transactions.includes(transaction.id)
		);
		return transactions_.reduce((acc, transaction) => {
			return acc + transaction.change;
		}, 0);
	});

	const data = {
		labels: [
			...categories.map(category => {
				return category.name;
			}),
		],
		datasets: [
			{
				label: 'Value ',
				data: [...displayData],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(208,64,224,0.2)',
					'rgba(64,224,208,0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(208,64,224,0.2)',
					'rgba(64,224,208,0.2)',
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div>
			<Pie data={data} />
		</div>
	);
}
