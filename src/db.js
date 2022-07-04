import {nanoid} from 'nanoid';

const db = [
	{
		id: nanoid(),
		accountName: 'bargeld',
		bankName: 'Hosentasche',
		accountValue: 700.02,
		entries: [
			{
				id: nanoid(),
				date: '2022-07-06',
				change: 40.31,
				note: 'cloth',
				category: 'Versicherung',
			},
			{
				id: nanoid(),
				date: '2022-07-06',
				change: 50.03,
				note: 'visit grandma',
				category: 'Hobbies and Freetime',
			},
		],
	},
	{
		id: nanoid(),
		accountName: 'Girokonto',
		bankName: 'coole Bank',
		accountValue: 700.15,
		entries: [
			{
				id: nanoid(),
				date: '2022-07-06',
				change: 500.32,
				note: 'Frau war einkaufen',
				category: 'Hobbys',
			},
			{
				id: nanoid(),
				date: '2022-07-06',
				change: 50.42,
				note: 'visit grandma',
				category: 'Freizeit',
			},
		],
	},
	{
		id: nanoid(),
		accountName: 'Sparbuch',
		bankName: 'nicht so coole bank',
		accountValue: 2000.11,
		entries: [
			{
				id: nanoid(),
				date: '2022-07-06',
				change: 300.23,
				note: 'new monitor',
			},
			{
				id: nanoid(),
				date: '2022-07-06',
				change: 50.56,
				note: 'visit grandma',
			},
		],
	},
];

export default db;
