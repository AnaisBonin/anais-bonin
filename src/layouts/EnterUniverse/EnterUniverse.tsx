import { Outlet } from 'react-router-dom';

import './EnterUniverse.css';

const EnterUniverse = () => {
	return (
		<main className="main-universe">
			<h1>Universe</h1>
			<Outlet />
		</main>
	);
};

export default EnterUniverse;
