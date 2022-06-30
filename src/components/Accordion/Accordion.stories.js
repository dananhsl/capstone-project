import Accordion from './';

const Template = args => (
	<Accordion {...args}>
		<p>I am the content</p>
	</Accordion>
);

export const Default = Template.bind({});

Default.args = {
	title: 'Edit me',
	open: false,
};

const story = {
	title: 'Accordion',
	component: Accordion,
};

export default story;
