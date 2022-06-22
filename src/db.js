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
				date: 'Mo:07-06-2022',
				change: -40.31,
				note: 'cloth',
			},
			{
				id: nanoid(),
				date: 'Mi:08-06-2022',
				change: 50.0,
				note: 'visit grandma',
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
				date: 'Mo:23-06-2022',
				change: -500,
				note: 'Frau war einkaufen',
			},
			{
				id: nanoid(),
				date: 'Mi:09-06-2022',
				change: 50.0,
				note: 'visit grandma',
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
				date: 'Mo:07-06-2022',
				change: -300,
				note: 'new monitor',
			},
			{
				id: nanoid(),
				date: 'Mi:08-06-2022',
				change: 50.0,
				note: 'visit grandma',
			},
		],
	},
];

export default db;
