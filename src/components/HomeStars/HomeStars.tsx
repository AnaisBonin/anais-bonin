import Star from '../Star/Star';

import './HomeStars.css';

interface HomeStarProps {
    visibility: "hidden" | "visible"
}

const HomeStars = ({ visibility }: HomeStarProps) => {
    const stars = [];

    for (let i = 0; i < 10; i++) {
        stars.push(i + 1);
    }


    return (
        <div className={`home-stars ${visibility}`}>
            {stars.map(star => (
                <Star number={star} />
            ))}
        </div>
    )
}

export default HomeStars