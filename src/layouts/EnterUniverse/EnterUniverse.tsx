import { Outlet } from 'react-router-dom';

import './EnterUniverse.css';
import { ReturnHome } from '../../components';

const EnterUniverse = () => {
	return (
		<main className="main-universe">
			<Outlet />
			<ReturnHome />
		</main>
	);
};

export default EnterUniverse;
