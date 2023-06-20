import './HomeTitle.css';

const HomeTitle = ({ title = 'Bienvenue, Hello' }) => {
    return (
        <h1 className="title">
            {title}
        </h1>
    )
}

export default HomeTitle