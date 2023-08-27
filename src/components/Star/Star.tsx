import { useHome } from "../../contexts/HomeProvider";

import { AsteriskIcon } from "../../assets/icons";

import './Star.css';

interface StarProps {
    name: string,
    i: number,
}

const Star = ({ name, i }: StarProps) => {
    const { handleStarSelection } = useHome()!;

    const handleClick = () => {
        handleStarSelection(name)
    }

    return (
        <div id={`star-${i}`} className="stars" onClick={handleClick}>
            <AsteriskIcon />
        </div>
    )
}

export default Star