import {backIcon} from '../Icons/Icons.js';

import {StyledBackBtn} from './styled';

export default function Button() {
	return <StyledBackBtn aria-label="Back Button">{backIcon}</StyledBackBtn>;
}
