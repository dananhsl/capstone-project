// const transactionId = transactions.map( (transaction) =>
// 	if(transaction.accountId === accountId )
// );

export const accounts = [
	// {
	// 	id: 'acc1',
	// 	name: 'bargeld',
	// 	value: 700.02,
	// 	transactions: ['trans1', 'trans2'],
	// 	bankid: 'bank1',
	// 	userId: 'optional',
	// },
	{
		id: 'acc2',
		accountName: 'Girokonto',
		bankName: 'coole Bank',
		accountValue: 700.15,
		transactions: ['trans3', 'trans4'],
	},
	{
		id: 'acc3',
		accountName: 'Sparbuch',
		bankName: 'nicht so coole bank',
		accountValue: 2000.11,
		transactions: ['trans5', 'trans6'],
	},
];

export const transactions = [
	{
		id: 'trans1',
		accountID: 'acc1',
		date: '2022-07-06',
		dateCreated: 'optional',
		dateUpdated: 'optional',
		change: 40.31,
		note: 'cloth',
		category: 'Versicherung',
	},
	{
		id: 'trans2',
		accountID: 'acc1',
		date: '2022-07-06',
		change: 50.03,
		note: 'visit grandma',
		category: 'Hobbies and Freetime',
	},
	{
		id: 'trans3',
		accountID: 'acc2',
		date: '2022-07-06',
		change: 300.23,
		note: 'new monitor',
	},
	{
		id: 'trans4',
		accountId: 'acc2',
		date: '2022-07-06',
		change: 50.56,
		note: 'visit grandma',
	},
	{
		id: 'trans5',
		accountId: 'acc3',
		date: '2022-07-06',
		change: 500.32,
		note: 'Frau war einkaufen',
		category: 'Hobbys',
	},
	{
		id: 'trans6',
		accountId: 'acc3',
		date: '2022-07-06',
		change: 50.42,
		note: 'visit grandma',
		category: 'Freizeit',
	},
];

export const bank = [
	{
		id: 'bank1',
		name: 'bankname',
	},
];
