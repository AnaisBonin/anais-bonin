import { AsteriskIcon } from '../../../assets/icons';

import './Star.css';

interface StarProps {
    number: number,
    setStarSelected: (number?: number) => void
}

const Star = ({ number, setStarSelected }: StarProps) => {
    const handleClick = () => setStarSelected(number);

    return (
        <div id={`star-${number}`} className="stars" onClick={handleClick}>
            <AsteriskIcon />
        </div>
    )
}

export default Star