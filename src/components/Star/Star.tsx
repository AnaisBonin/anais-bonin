import { useHome } from "../../contexts/HomeProvider";

import { AsteriskIcon } from "../../assets/icons";

import './Star.css';

interface StarProps {
    number: number,
}

const Star = ({ number }: StarProps) => {
    const { handleStarSelection, starSelected } = useHome()!;

    const handleClick = () => {
        handleStarSelection(number)
    }

    return (
        <div id={`star-${number}`} className="stars" onClick={handleClick}>
            <AsteriskIcon />
        </div>
    )
}

export default Star