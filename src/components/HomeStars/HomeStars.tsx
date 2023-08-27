import Star from '../Star/Star';

import './HomeStars.css';

interface HomeStarsProps {
    display?: boolean,
}

const HomeStars = ({ display = false }: HomeStarsProps) => {
    const starsVisibility = display ? "visible" : "hidden";

    const starsQuantity = [1];
    for (let i = 1; i < 10; i++) {
        starsQuantity.push(i + 1);
    }

    return (
        <div className={`home-stars ${starsVisibility}`} >
            {starsQuantity.map((star, i) => (
                <Star key={i} number={star} />
            ))}
        </div>
    )
}

export default HomeStars