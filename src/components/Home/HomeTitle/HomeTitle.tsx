import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { IPortfolioPage, defineHomeTitle, findPageInfo } from '../../../utils';
import { useHome } from '../../../contexts/HomeProvider';

import ReturnHome from '../../ReturnHome/ReturnHome';

import './HomeTitle.css';

interface HomeTitleProps {
	switchTitleClicked: () => void;
}

const HomeTitle = ({ switchTitleClicked }: HomeTitleProps) => {
	const { starSelected } = useHome();

	const [title, setTitle] = useState<string>('');
	const [selectedPage, setSelectedPage] = useState<IPortfolioPage | {}>({});

	useMemo(() => {
		const homeTitle = defineHomeTitle(starSelected);
		setTitle(homeTitle);
	}, [starSelected, setTitle]);

	const handleClick = () => {
		switchTitleClicked();
		setSelectedPage(findPageInfo(title));
		console.log(selectedPage);
	};

	return (
		<h1 className="title" onClick={handleClick}>
			{starSelected === '' ? (
				title
			) : (
				<>
					<Link to={'/Contact '}> {title}</Link>
					<ReturnHome />
				</>
			)}
		</h1>
	);
};

export default HomeTitle;
