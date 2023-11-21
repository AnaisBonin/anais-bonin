import { useHome } from '../../../contexts/HomeProvider';

import { GalaxyIcon } from '../../../assets';
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
		<div
			style={starPosition}
			className="stars cursor-pointer "
			onClick={handleClick}
		>
			<GalaxyIcon />
		</div>
	);
};

export default Star;
