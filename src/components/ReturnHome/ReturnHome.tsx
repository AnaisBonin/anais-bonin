import { Link } from 'react-router-dom';

import { useHome } from '../../contexts/HomeProvider';

import { RocketIcon } from '../../assets/icons';

import './ReturnHome.css';

const ReturnHome = () => {
	const { handleStarSelection } = useHome();

	const resetStarSelection = () => handleStarSelection('');

	return (
		<Link to="/" onClick={resetStarSelection}>
			<RocketIcon color={'#DDCDD3'} margin={'10px 20px'} />
		</Link>
	);
};

export default ReturnHome;
