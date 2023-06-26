import { HomeProvider } from '../../contexts';
import { HomeStars, HomeTitle } from '../../components';

import { HeartIcon } from '../../assets/icons';

import './Home.css';

const Home = () => {


    return (
        <HomeProvider>
            <div className="home">
                <HomeTitle />
                <HeartIcon color={"#70243B"} margin={"10px 20px"} />
                <HomeStars />
            </div>
        </HomeProvider>

    );
};

export default Home;