import { Outlet } from 'react-router-dom';

import './EnterUniverse.css';
import { PageMenu, ReturnHome } from '../../components';

const EnterUniverse = () => {
	return (
		<div className="main-universe">
			<main>
				<Outlet />
			</main>
			<footer className="align-h">
				<ReturnHome />
				<PageMenu />
			</footer>
		</div>
	);
};

export default EnterUniverse;
