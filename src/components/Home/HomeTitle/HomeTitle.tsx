import { useEffect, useState } from 'react';

import { useHome } from '../../../contexts/HomeProvider';

import './HomeTitle.css';
import { Link } from 'react-router-dom';

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
			{title}
			<Link to={`/Contact`}> Go to</Link>
		</h1>
	);
};

export default HomeTitle;
