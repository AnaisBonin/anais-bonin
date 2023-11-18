import { Link } from 'react-router-dom';

import { portfolioPages } from '../../utils';

import './PageMenu.css';

const PageMenu = () => {
	return (
		<menu className="page-menu align-h cursor-flower">
			{portfolioPages.map((page) => (
				<li className="menu-item">
					<Link to={page.path}>{page.title}</Link>
				</li>
			))}
		</menu>
	);
};

export default PageMenu;
