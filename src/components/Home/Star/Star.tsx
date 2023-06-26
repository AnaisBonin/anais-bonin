import { AsteriskIcon } from '../../../assets/icons';
import { useHome } from '../../../contexts/HomeProvider';

import './Star.css';

interface StarProps {
	number: number;
}

const Star = ({ number }: StarProps) => {
	const { handleStarSelected } = useHome();
	const handleClick = () => handleStarSelected(number);

	return (
		<div id={`star-${number}`} className="stars" onClick={handleClick}>
			<AsteriskIcon />
		</div>
	);
};

export default Star;
