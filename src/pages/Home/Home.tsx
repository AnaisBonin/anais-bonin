import { useState } from 'react';

import HomeStars from '../../components/HomeStars/HomeStars';

import { HeartIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => setIsClicked(!isClicked);

    return (
        <div className="home">
            <h1 className="title" onClick={handleClick}>
                Bienvenue, Hello
            </h1>
            <HeartIcon color={"#70243B"} margin={"10px 20px"} />
            {isClicked && <HomeStars />}
        </div>

    );
};

export default Home;