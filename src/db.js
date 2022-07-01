import {nanoid} from 'nanoid';

const db = [
	{
		id: nanoid(),
		accountName: 'bargeld',
		bankName: 'Hosentasche',
		accountValue: 8,
		entries: [
			{
				id: nanoid(),
				date: '07-06-2022',
				change: -40.31,
				note: 'cloth',
				category: 'Versicherung',
			},
			{
				id: nanoid(),
				date: '08-06-2022',
				change: 50.0,
				note: 'visit grandma',
				category: 'Hobbies and Freetime',
			},
		],
	},
	{
		id: nanoid(),
		accountName: 'Girokonto',
		bankName: 'coole Bank',
		accountValue: 700,
		entries: [
			{
				id: nanoid(),
				date: '23-06-2022',
				change: -500,
				note: 'Frau war einkaufen',
				category: 'Hobbys',
			},
			{
				id: nanoid(),
				date: '09-06-2022',
				change: 50.0,
				note: 'visit grandma',
				category: 'Freizeit',
			},
		],
	},
	{
		id: nanoid(),
		accountName: 'Sparbuch',
		bankName: 'nicht so coole bank',
		accountValue: 2000,
		entries: [
			{
				id: nanoid(),
				date: '07-06-2022',
				change: -300,
				note: 'new monitor',
			},
			{
				id: nanoid(),
				date: '08-06-2022',
				change: 50.0,
				note: 'visit grandma',
			},
		],
	},
];

export default db;
