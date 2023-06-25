import { useHome } from "../contexts/HomeProvider";

interface DefineTitleProps {
    star?: number,
}

const HomeUtils = () => {
    const { defaultTitle, changeTitle } = useHome();

    const defineTitle = ({ star }: DefineTitleProps) => {
        const resetTitle = () => changeTitle(defaultTitle);

        if (star) {
            switch (star) {
                case 1:
                    changeTitle('Star 1')
                    break;
                case 3:
                    changeTitle('Star 3')
                    break;
                case 6:
                    changeTitle('Star 6')
                    break;
                default:
                    resetTitle();
            }
        } else {
            resetTitle();
        }
    }
    return { defineTitle }
}

export default HomeUtils