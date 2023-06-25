import { useState } from 'react';

import HomeProvider from '../../contexts/HomeProvider';
import { HomeStars } from '../../components/Home';
import { HomeTitle } from '../../components/Home';

import { HeartIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {
    const [starSelected, setStarSelected] = useState<number>();

    return (
        <HomeProvider>
            <div className="home">
                <HomeTitle />
                <HeartIcon color={"#70243B"} margin={"10px 20px"} />
                <HomeStars setStarSelected={setStarSelected} />
            </div>
        </HomeProvider>

    );
};

export default Home;