import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useHome } from '../../../contexts/HomeProvider';
import ReturnHome from '../../ReturnHome/ReturnHome';

import './HomeTitle.css';

interface HomeTitleProps {
	handleClick: () => void;
}

const HomeTitle = ({ handleClick }: HomeTitleProps) => {
	const { starSelected } = useHome();

	const defaultTitle = 'Hello';
	const [title, setTitle] = useState<string>(defaultTitle);

	useEffect(() => {
		if (starSelected === '') {
			setTitle(defaultTitle);
		} else {
			setTitle(starSelected);
		}
	}, [starSelected, setTitle]);

	return (
		<h1 className="title" onClick={handleClick}>
			{starSelected === '' ? (
				title
			) : (
				<>
					<Link to={`/Contact`}> {title}</Link>
					<ReturnHome />
				</>
			)}
		</h1>
	);
};

export default HomeTitle;
