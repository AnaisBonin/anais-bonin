import { useState } from 'react';

import HomeStars from '../../components/HomeStars/HomeStars';
import HomeTitle from '../../components/HomeTitle/HomeTitle';

import { HeartIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {
    const [title, setTitle] = useState<string>();
    const [titleClicked, setTitleClicked] = useState(false);

    const handleTitleClick = () => setTitleClicked(!titleClicked);

    return (
        <div className="home">
            <HomeTitle title={title} handleClick={handleTitleClick} setTitle={setTitle} />
            <HeartIcon color={"#70243B"} margin={"10px 20px"} />
            <HomeStars display={titleClicked} />
        </div>

    );
};

export default Home;