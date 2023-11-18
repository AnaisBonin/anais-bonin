import { Link } from 'react-router-dom';

import { portfolioPages } from '../../utils';

import './PageMenu.css';

const PageMenu = () => {
	const pages = portfolioPages;

	return (
		<menu>
			<li>
				<Link to="/">Title</Link>
			</li>
		</menu>
	);
};

export default PageMenu;
