import { HeartIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">
                Bienvenue, Hello
            </h1>
            <HeartIcon color={"#70243B"} margin={"10px 20px"} />
        </div>
    );
};

export default Home;