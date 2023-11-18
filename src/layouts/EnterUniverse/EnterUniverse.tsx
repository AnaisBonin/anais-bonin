import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './EnterUniverse.css';
import { PageMenu, ReturnHome } from '../../components';

const EnterUniverse = () => {
	const [isRocketOn, setIsRocketOn] = useState(false);

	const setRocketState = (value: boolean) => setIsRocketOn(value);

	return (
		<div className="main-universe lato">
			<main>
				<Outlet />
			</main>
			<footer className="align-h">
				<ReturnHome setRocketState={setRocketState} />
				{isRocketOn && <PageMenu />}
			</footer>
		</div>
	);
};

export default EnterUniverse;
