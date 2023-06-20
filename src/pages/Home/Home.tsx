import { useState } from 'react';

import Star from '../../components/Star/Star';
import { HeartIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [title, setTitle] = useState<string>();

    const handleClick = () => setIsClicked(!isClicked);

    const visibility = isClicked ? "visible" : "hidden";

    const starsQuantity = [1];
    for (let i = 1; i < 10; i++) {
        starsQuantity.push(i + 1);
    }

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
            <h1 className="title" onClick={handleClick}>
                {title ?? 'Bienvenue, Hello'}
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