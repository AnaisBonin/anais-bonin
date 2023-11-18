import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useHome } from '../../contexts/HomeProvider';

import { RocketFiredIcon, RocketIcon } from '../../assets';

import './ReturnHome.css';

interface IReturnHome {
	setRocketState?: (value: boolean) => void;
}

const ReturnHome = ({ setRocketState }: IReturnHome) => {
	const { handleStarSelection } = useHome();

	const [isRocketOn, setIsRocketOn] = useState(false);

	const fireRocket = () => setIsRocketOn(true);
	const stopRocket = () => setIsRocketOn(false);

	const resetStarSelection = () => handleStarSelection('');

	useEffect(() => {
		if (setRocketState) {
			setRocketState(isRocketOn);
		}
	}, [isRocketOn]);

	return (
		<Link
			to="/"
			className="return-home-button"
			onClick={resetStarSelection}
			onMouseEnter={fireRocket}
			onMouseLeave={stopRocket}
		>
			{isRocketOn ? (
				<RocketFiredIcon margin={'0 5px'} />
			) : (
				<RocketIcon margin={'0 5px'} />
			)}
		</Link>
	);
};

export default ReturnHome;
