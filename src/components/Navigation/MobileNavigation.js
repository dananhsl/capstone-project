import {useState} from 'react';
import {IoIosClose} from 'react-icons/io';
import {TbMenu2} from 'react-icons/tb';

import NavigationLinks from './NavigationLinks';

export default function MobileNavigation() {
	const [open, setOpen] = useState(false);

	const closeIcon = <IoIosClose onClick={() => setOpen(!open)} />;
	const openIcon = <TbMenu2 onClick={() => setOpen(!open)} />;
	return (
		<>
			{open ? closeIcon : openIcon}
			{open && <NavigationLinks />}
		</>
	);
}
