import Pie from '../components/Analysis/index';
import {StyledPieContainer} from '../components/Analysis/styled';
import Button from '../components/Button';

export default function AnalysisPage() {
	return (
		<>
			<h1>Analysis</h1>
			<Button />
			<p>Click on caption to remove or add categories from the chart</p>
			<StyledPieContainer>
				<Pie />
			</StyledPieContainer>
		</>
	);
}
