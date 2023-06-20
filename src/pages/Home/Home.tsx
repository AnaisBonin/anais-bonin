import { useState } from 'react';

import HomeStars from '../../components/HomeStars/HomeStars';

import { HeartIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {
    const [titleClicked, setTitleClicked] = useState(false);
    const [title, setTitle] = useState<string>();

    const handleTitleClick = () => setTitleClicked(!titleClicked);

    const resetTitle = () => setTitle(undefined);

    const changeTitle = (star?: number) => {
        if (star) {
            switch (star) {
                case 1:
                    setTitle('Star 1')
                    break;
                case 3:
                    setTitle('Star 3')
                    break;
                case 6:
                    setTitle('Star 6')
                    break;
                default:
                    resetTitle();
            }
        } else {
            resetTitle();
        }
    }

    return (
        <div className="home">
            <h1 className="title" onClick={handleTitleClick}>
                {title ?? 'Bienvenue, Hello'}
            </h1>
            <HeartIcon color={"#70243B"} margin={"10px 20px"} />
            <HomeStars changeTitle={changeTitle} display={titleClicked} />
        </div>

    );
};

export default Home;