import { useHome } from '../../../contexts/HomeProvider';

import './HomeTitle.css';

const HomeTitle = () => {
    const { title, handleTitleClicked } = useHome();

    return (
        <h1 className="title" onClick={handleTitleClicked}>
            {title}
        </h1>
    )
};

export default HomeTitle