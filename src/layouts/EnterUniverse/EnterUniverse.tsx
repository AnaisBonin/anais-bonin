import { Outlet } from 'react-router-dom';

import { Footer } from '../../components';

import './EnterUniverse.css';

const EnterUniverse = () => {
	return (
		<div className="main-universe lato">
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default EnterUniverse;
