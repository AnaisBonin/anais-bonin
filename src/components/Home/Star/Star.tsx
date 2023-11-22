import { useHome } from '../../../contexts/HomeProvider';

import { GalaxyIcon } from '../../../assets';
import { randomNumber } from '../../../utils';
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

	const rotation = randomNumber(10, 340);
	const starStyle = { transform: `rotate(${rotation}deg)`, ...starPosition };

	return (
		<div
			style={starStyle}
			className="stars cursor-pointer "
			onClick={handleClick}
		>
			<GalaxyIcon />
		</div>
	);
};

export default Star;
