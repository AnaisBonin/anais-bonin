import { useHome } from '../../../contexts/HomeProvider';
import Star from '../Star/Star';

import './HomeStars.css';

const HomeStars = () => {
    const { isTitleClicked, handleStarSelected } = useHome();

    const starsVisibility = isTitleClicked ? "visible" : "hidden";

    const starsQuantity = [1];
    for (let i = 1; i < 10; i++) {
        starsQuantity.push(i + 1);
    }

    const resetStarSelection = () => handleStarSelected(undefined);

    return (
        <div className={`home-stars ${starsVisibility}`} onClick={resetStarSelection}>
            {starsQuantity.map(star => (
                <Star number={star} setStarSelected={handleStarSelected} />
            ))}
        </div>
    )
}

export default HomeStars