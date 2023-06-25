import './HomeTitle.css';

interface HomeTitleProps {
    title?: string,
    handleClick: () => void,
    setTitle: (newTitle?: string) => void
}

const HomeTitle = ({ title = 'Bienvenue, Hello', handleClick, setTitle }: HomeTitleProps) => {
    const onClick = () => handleClick();

    const resetTitle = () => setTitle(undefined);

    const changeTitle = (star?: number) => {
        if (star) {
            switch (star) {
                case 1:
                    setTitle('Star 1')
                    break;
                case 3:
                    setTitle('Star 3')
                    break;
                case 6:
                    setTitle('Star 6')
                    break;
                default:
                    resetTitle();
            }
        } else {
            resetTitle();
        }
    }

    return (
        <h1 className="title" onClick={onClick}>
            {title}
        </h1>
    )
}

export default HomeTitle