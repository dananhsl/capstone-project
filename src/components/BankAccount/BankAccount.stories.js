import BankAccount from '.';

export const Default = args => <BankAccount {...args} />;

const story = Default.bind({});
story.args = {
	accountName: 'Girokonto',
	bankName: 'Volksbank',
	accountValue: 200,
};

export default story;
