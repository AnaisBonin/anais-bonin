import { useEffect, useState } from 'react';

import { useHome } from '../../contexts/HomeProvider';

import './HomeTitle.css';

interface HomeTitleProps {
    handleClick: () => void,
}

const HomeTitle = ({ handleClick }: HomeTitleProps) => {
const { starSelected } = useHome();

const defaultTitle = 'Hello';
const [title, setTitle] = useState<string>(defaultTitle);

    useEffect(() => {
        const resetTitle = () => setTitle(defaultTitle);

        if (starSelected) {
            switch (starSelected) {
                case 0: 
                    resetTitle();
                    break;
                case 1:
                    setTitle('Star 1');
                    break;
                case 3:
                    setTitle('Star 3');
                    break;
                case 6:
                    setTitle('Star 6');
                    break;
                default:
                    resetTitle();
            }
        } else {
            resetTitle();
        }
    }, [starSelected, setTitle]);

    return (
        <h1 className="title" onClick={handleClick}>
            {title}
        </h1>
    )
}

export default HomeTitle