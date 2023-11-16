import { useState } from 'react';

import { HomeStars, HomeTitle } from '../../components';

import './Home.css';

const Home = () => {
	const [titleClicked, setTitleClicked] = useState(false);

	const switchTitleClicked = () => setTitleClicked(!titleClicked);

	return (
		<div className="home">
			<HomeTitle switchTitleClicked={switchTitleClicked} />
			<HomeStars display={titleClicked} />
		</div>
	);
};

export default Home;
