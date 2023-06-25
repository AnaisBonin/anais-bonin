import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export interface HomeValuesProps {
    defaultTitle: string,
    isTitleClicked: boolean,
    title: string,
    handleTitleClicked: () => void,
    changeTitle: (value: string) => void,
}

export interface HomeProviderProps {
    children: ReactNode,
}

const HomeContext = createContext<HomeValuesProps>({
    defaultTitle: '',
    isTitleClicked: false,
    title: '',
    handleTitleClicked: () => { },
    changeTitle: (title: string) => title,
});

const HomeProvider = ({ children }: HomeProviderProps) => {
    const defaultTitle = 'Hi there!';

    const [title, setTitle] = useState(defaultTitle);
    const [isTitleClicked, setIsTitleClicked] = useState(false);

    const changeTitle = (value: string) => setTitle(value);
    const handleTitleClicked = () => setIsTitleClicked(!isTitleClicked);

    const HomeValues: HomeValuesProps = useMemo(() => ({
        defaultTitle,
        isTitleClicked,
        title,
        changeTitle,
        handleTitleClicked,
    }), [isTitleClicked, title]);

    return (
        <HomeContext.Provider value={HomeValues}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHome = () => useContext(HomeContext);

export default HomeProvider;
