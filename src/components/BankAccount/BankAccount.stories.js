import BankAccount from '.';

const Template = args => <BankAccount {...args} />;

export const Default = Template.bind({});
Default.args = {
	accountName: 'Girokonto',
	bankName: 'Volksbank',
	accountValue: 200,
	onDelete: () => {
		console.log('delete');
	},
};

const story = {
	title: 'Bankaccount',
	component: BankAccount,
};
export default story;
