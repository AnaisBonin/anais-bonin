import { useHome } from '../../../contexts/HomeProvider';

import { AsteriskIcon } from '../../../assets/icons';
import { IStarPosition } from '../../../utils/portfolioPages';

import './Star.css';

interface StarProps {
	name: string;
	starPosition: IStarPosition;
}

const Star = ({ name, starPosition }: StarProps) => {
	const { handleStarSelection } = useHome();

	const handleClick = () => {
		handleStarSelection(name);
	};

	return (
		<div style={starPosition} className="stars" onClick={handleClick}>
			<AsteriskIcon />
		</div>
	);
};

export default Star;
