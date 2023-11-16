import { useState } from 'react';

import { HomeStars, HomeTitle } from '../../components';

import './Home.css';

const Home = () => {
	const [titleClicked, setTitleClicked] = useState(false);

	const handleTitleClick = () => setTitleClicked(!titleClicked);

	return (
		<div className="home">
			<HomeTitle handleClick={handleTitleClick} />
			<HomeStars display={titleClicked} />
		</div>
	);
};

export default Home;
