import { useHome } from '../../../contexts/HomeProvider';
import Star from '../Star/Star';

import './HomeStars.css';

interface HomeStarsProps {
    setStarSelected: (number?: number) => void,
}

const HomeStars = ({ setStarSelected }: HomeStarsProps) => {
    const { isTitleClicked } = useHome();

    const starsVisibility = isTitleClicked ? "visible" : "hidden";

    const starsQuantity = [1];
    for (let i = 1; i < 10; i++) {
        starsQuantity.push(i + 1);
    }

    const resetStarSelection = () => setStarSelected(undefined);

    return (
        <div className={`home-stars ${starsVisibility}`} onClick={resetStarSelection}>
            {starsQuantity.map(star => (
                <Star number={star} setStarSelected={setStarSelected} />
            ))}
        </div>
    )
}

export default HomeStars