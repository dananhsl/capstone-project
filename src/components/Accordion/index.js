export default function Accordion({children, title, open, ...props}) {
	return (
		<details open={open} {...props}>
			<summary>{title}</summary>
			{children}
		</details>
	);
}
