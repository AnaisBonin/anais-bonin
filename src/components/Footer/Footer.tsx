import { useEffect, useState } from 'react';

import { PageMenu } from '../PageMenu';
import { ReturnHome } from '../ReturnHome';

import './Footer.css';

const Footer = () => {
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
		<footer className="footer-universe align-h">
			<ReturnHome setRocketState={setRocketState} />
			<div onMouseEnter={showMenu} onMouseLeave={hideMenu}>
				<PageMenu display={displayMenu} />
			</div>
		</footer>
	);
};

export default Footer;
