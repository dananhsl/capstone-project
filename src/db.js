// const transactionId = transactions.map( (transaction) =>
// 	if(transaction.accountId === accountId )
// );

export const accounts = [
	{
		id: 'a-1',
		name: 'bargeld',
		value: 700.02,
		transactions: ['t-1', 't-2', 't-8', 't-9'],
		bankid: 'b-1',
		userId: 'optional',
	},
	{
		id: 'a-2',
		name: 'Girokonto',
		value: 2200.0,
		transactions: ['t-3', 't-4'],
		bankid: 'b-2',
		userId: 'optional',
	},
	{
		id: 'a-3',
		name: 'Kreditkarte',
		value: 700.02,
		transactions: ['t-5', 't-6', 't-7'],
		bankid: 'b-1',
		userId: 'optional',
	},
];

export const transactions = [
	{
		id: 't-1',
		accountID: 'a-1',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 40.31,
		note: 'cloth',
		category: 'c-1',
	},
	{
		id: 't-2',
		accountID: 'a-1',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 100.53,
		note: 'cloth',
		ccategory: 'c-1',
	},
	{
		id: 't-3',
		accountID: 'a-2',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 120.31,
		note: 'food for 2 weeks',
		category: 'c-2',
	},
	{
		id: 't-4',
		accountID: 'a-2',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 23.98,
		note: 'craving for icecream',
		category: 'c-2',
	},
	{
		id: 't-5',
		accountID: 'a-3',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 12.31,
		note: 'flowers',
		category: 'c-3',
	},
	{
		id: 't-6',
		accountID: 'a-3',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 22.22,
		note: 'cookies-delivery',
		ccategory: 'c-6',
	},
	{
		id: 't-7',
		accountID: 'a-3',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 485.5,
		note: 'greedy landlord',
		category: 'c-7',
	},
	{
		id: 't-8',
		accountID: 'a-1',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 127.68,
		note: 'somewhere very expensiv',
		category: 'c-4',
	},
	{
		id: 't-9',
		accountID: 'a-1',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 142.51,
		note: 'tent and camping stuff',
		category: 'c-3',
	},
];

export const banks = [
	{
		id: 'b-1',
		name: 'hosentasche',
	},
	{
		id: 'b-2',
		name: 'nicht so coole bank',
	},
	{
		id: 'b-3',
		name: 'coole bank',
	},
];

export const category = [
	{
		id: 'c-1',
		name: 'hobbies and free time',
	},
	{
		id: 'c-2',
		name: 'groceries',
	},
	{
		id: 'c-3',
		name: 'other',
	},
	{
		id: 'c-4',
		name: 'gasoline',
	},
	{
		id: 'c-5',
		name: 'insurance',
	},
	{
		id: 'c-6',
		name: 'subscriptions',
	},
	{
		id: 'c-7',
		name: 'rent',
	},
];
