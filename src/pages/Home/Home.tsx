import { useState } from 'react';

import HomeStars from '../../components/HomeStars/HomeStars';
import HomeTitle from '../../components/HomeTitle/HomeTitle';

import { HeartIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {
    const [titleClicked, setTitleClicked] = useState(false);

    const handleTitleClick = () => setTitleClicked(!titleClicked);

    return (
        <div className="home">
            <HomeTitle handleClick={handleTitleClick} />
            <HeartIcon color={"#70243B"} margin={"10px 20px"} />
            <HomeStars display={titleClicked} />
        </div>

    );
};

export default Home;