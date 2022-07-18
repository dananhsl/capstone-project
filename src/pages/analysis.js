import {useNavigate} from 'react-router-dom';

import Pie from '../components/Analysis/index';
import {StyledPieContainer} from '../components/Analysis/styled';
import {StyledBackBtn} from '../components/Button/styled';
import {backIcon} from '../components/Icons/Icons';

export default function AnalysisPage() {
	const navigate = useNavigate();
	return (
		<>
			<h1>Analysis</h1>
			<StyledBackBtn onClick={() => navigate('/')}>{backIcon}</StyledBackBtn>
			<p>Click on caption to remove or add categories from the chart</p>
			<StyledPieContainer>
				<Pie />
			</StyledPieContainer>
		</>
	);
}
