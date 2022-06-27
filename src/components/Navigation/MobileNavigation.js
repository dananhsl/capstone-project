import {useState} from 'react';

import NavigationLinks from './NavigationLinks';
import {Icon} from './styled';

export default function MobileNavigation() {
	const [open, setOpen] = useState(false);

	const openIcon = (
		<Icon viewBox="0 0 24 24" onClick={() => setOpen(!open)}>
			<path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
		</Icon>
	);

	const closeIcon = (
		<Icon viewBox="0 0 24 24" onClick={() => setOpen(!open)}>
			<path
				fill="currentColor"
				d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
			/>
		</Icon>
	);

	const closeMobileMenu = () => setOpen(false);
	return (
		<>
			{open ? closeIcon : openIcon}
			{open && <NavigationLinks closeMenu={closeMobileMenu} />}
		</>
	);
}
