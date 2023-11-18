import { Link } from 'react-router-dom';

import { portfolioPages } from '../../utils';

import './PageMenu.css';

interface IPageMenu {
	display: boolean;
}

const PageMenu = ({ display }: IPageMenu) => {
	const visibility = display ? 'visible' : 'hidden';

	return (
		<menu className={'page-menu align-h cursor-pointer ' + visibility}>
			{portfolioPages.map((page) => (
				<li className="menu-item">
					<Link to={page.path}>{page.title}</Link>
				</li>
			))}
		</menu>
	);
};

export default PageMenu;
