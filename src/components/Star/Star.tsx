import { AsteriskIcon } from "../../assets/icons"

import './Star.css';

interface StarProps {
    number: number,
}

const Star = ({ number }: StarProps) => (
    <div id={`star-${number}`} className="stars">
        <AsteriskIcon />
    </div>
)

export default Star