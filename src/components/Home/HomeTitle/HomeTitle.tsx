import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { findPageInfo, homePage } from '../../../utils';
import { useHome } from '../../../contexts/HomeProvider';

import './HomeTitle.css';

interface HomeTitleProps {
	switchTitleClicked: () => void;
}

const HomeTitle = ({ switchTitleClicked }: HomeTitleProps) => {
	const { starSelected } = useHome();
	const [pageInfo, setPageInfo] = useState(homePage);

	useMemo(() => {
		setPageInfo(findPageInfo(starSelected));
	}, [starSelected]);

	return (
		<h1
			className="home-title cursor-pointer center-v"
			onClick={switchTitleClicked}
		>
			{starSelected === '' ? (
				pageInfo.title
			) : (
				<>
					<Link to={'enter-universe/' + pageInfo.path}> {pageInfo.title}</Link>
				</>
			)}
		</h1>
	);
};

export default HomeTitle;
