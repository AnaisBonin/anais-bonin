import { useState } from 'react';

import HomeStars from '../../components/HomeStars/HomeStars';
import HomeTitle from '../../components/HomeTitle/HomeTitle';

import { RocketIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {
	const [titleClicked, setTitleClicked] = useState(false);

	const handleTitleClick = () => setTitleClicked(!titleClicked);

	return (
		<div className="home">
			<HomeTitle handleClick={handleTitleClick} />
			<RocketIcon
				color={'#DDCDD3'}
				margin={'10px 20px'}
			/>
			<HomeStars display={titleClicked} />
		</div>
	);
};

export default Home;
