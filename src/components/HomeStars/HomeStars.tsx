import { useHome } from '../../contexts/HomeProvider';
import Star from '../Star/Star';

import './HomeStars.css';

interface HomeStarsProps {
    display?: boolean,
}

const HomeStars = ({ display = false }: HomeStarsProps) => {

    const { handleStarSelection } = useHome()!;
    const starsVisibility = display ? "visible" : "hidden";

    const starsQuantity = [1];
    for (let i = 1; i < 10; i++) {
        starsQuantity.push(i + 1);
    }

    const resetStarSelection = () => handleStarSelection(0);

    return (
        <div className={`home-stars ${starsVisibility}`} onClick={resetStarSelection}>
            {starsQuantity.map(star => (
                <Star number={star} />
            ))}
        </div>
    )
}

export default HomeStars