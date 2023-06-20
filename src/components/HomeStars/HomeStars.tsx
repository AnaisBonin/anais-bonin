import Star from '../Star/Star';

import './HomeStars.css';

const HomeStars = ({ display = false }) => {
    const starsQuantity = [1];

    const starsVisibility = display ? "visible" : "hidden";

    for (let i = 1; i < 10; i++) {
        starsQuantity.push(i + 1);
    }

    return (
        <div className={`home-stars ${starsVisibility}`}>
            {starsQuantity.map(star => (
                <Star number={star} />
            ))}
        </div>
    )
}

export default HomeStars