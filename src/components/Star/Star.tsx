import { AsteriskIcon } from "../../assets/icons"

import './Star.css';

interface StarProps {
    number: number,
    handleClick: (number: number) => void
}

const Star = ({ number, handleClick }: StarProps) => {
    const onClick = () => handleClick(number);

    return (
        <div id={`star-${number}`} className="stars" onClick={onClick}>
            <AsteriskIcon />
        </div>
    )
}

export default Star