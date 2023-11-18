import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { PageMenu, ReturnHome } from '../../components';

import './EnterUniverse.css';

const EnterUniverse = () => {
	const [isRocketOn, setIsRocketOn] = useState(false);
	const [displayMenu, setDisplayMenu] = useState(false);

	const showMenu = () => setDisplayMenu(true);
	const hideMenu = () => setDisplayMenu(false);

	const setRocketState = (value: boolean) => setIsRocketOn(value);

	useEffect(() => {
		if (isRocketOn) {
			showMenu();
		}
	}, [isRocketOn]);

	return (
		<div className="main-universe lato">
			<main>
				<Outlet />
			</main>
			<footer className="footer-universe align-h">
				<ReturnHome setRocketState={setRocketState} />
				<div onMouseEnter={showMenu} onMouseLeave={hideMenu}>
					<PageMenu display={displayMenu} />
				</div>
			</footer>
		</div>
	);
};

export default EnterUniverse;
