import { AsteriskIcon } from "../../assets/icons"

import './HomeStars.css'

interface StarProps {
    number: number,
}

const Star = ({ number }: StarProps) => (
    <div id={`star-${number}`} className="stars">
        <AsteriskIcon />
    </div>
)

const HomeStars = () => {
    const stars = [];

    for (let i = 0; i < 10; i++) {
        stars.push(i + 1);
    }


    return (
        <div id="home-stars">
            {stars.map(star => (
                <Star number={star} />
            ))}
        </div>
    )
}

export default HomeStars