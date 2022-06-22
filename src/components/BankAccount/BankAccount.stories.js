import BankAccount from '.';

export const Default = args => <BankAccount {...args} />;

const story = Default.bind({});
story.args = {
	accountName: 'Bank Account',
	bankName: 'BankAccount',
	accountValue: 200,
};

export default story;
