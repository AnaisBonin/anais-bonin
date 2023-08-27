import { Link } from 'react-router-dom';
import { RocketIcon } from '../../assets/icons';

import './ReturnHome.css';

const ReturnHome = () => {
	return (
		<Link to="/">
			<RocketIcon
				color={'#DDCDD3'}
				margin={'10px 20px'}
			/>
		</Link>
	);
};

export default ReturnHome;
