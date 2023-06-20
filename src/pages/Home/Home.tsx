import { useState } from 'react';

import Star from '../../components/Star/Star';
import { HeartIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => setIsClicked(!isClicked);

    const visibility = isClicked ? "visible" : "hidden";

    const starsQuantity = [1];
    for (let i = 1; i < 10; i++) {
        starsQuantity.push(i + 1);
    }

    return (
        <div className="home">
            <h1 className="title" onClick={handleClick}>
                Bienvenue, Hello
            </h1>
            <HeartIcon color={"#70243B"} margin={"10px 20px"} />
            <div className={`home-stars ${visibility}`}>
                {starsQuantity.map(star => (
                    <Star number={star} />
                ))}
            </div>
        </div>

    );
};

export default Home;