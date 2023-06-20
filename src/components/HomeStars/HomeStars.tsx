import Star from '../Star/Star';

import './HomeStars.css';

interface HomeStarsProps {
    display?: boolean
    changeTitle: (star?: number) => void
}

const HomeStars = ({ changeTitle, display = false }: HomeStarsProps) => {
    const starsQuantity = [1];

    const starsVisibility = display ? "visible" : "hidden";

    for (let i = 1; i < 10; i++) {
        starsQuantity.push(i + 1);
    }

    return (
        <div className={`home-stars ${starsVisibility}`}>
            {starsQuantity.map(star => (
                <Star number={star} handleClick={changeTitle} />
            ))}
        </div>
    )
}

export default HomeStars