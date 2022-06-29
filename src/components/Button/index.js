import {useNavigate} from 'react-router-dom';

import StyledButton from './styled';
export default function Button() {
	const navigate = useNavigate();
	return <StyledButton onClick={() => navigate('/')}>Return to Dashboard</StyledButton>;
}

Button.propTypes = {};
