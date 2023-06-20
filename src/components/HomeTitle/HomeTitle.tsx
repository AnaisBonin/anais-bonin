import './HomeTitle.css';

interface HomeTitleProps {
    title?: string,
    handleClick: () => void
}

const HomeTitle = ({ title = 'Bienvenue, Hello', handleClick }: HomeTitleProps) => {
    const onClick = () => handleClick();

    return (
        <h1 className="title" onClick={onClick}>
            {title}
        </h1>
    )
}

export default HomeTitle