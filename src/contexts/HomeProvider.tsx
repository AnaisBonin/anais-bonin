import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

export interface HomeValuesProps {
    defaultTitle: string,
    isTitleClicked: boolean,
    title: string,
    setIsTitleClicked: Dispatch<SetStateAction<boolean>> | (() => void),
    setTitle: Dispatch<SetStateAction<string>> | (() => void),
}

export interface HomeProviderProps {
    children: ReactNode,
}

const HomeContext = createContext<HomeValuesProps>({
    defaultTitle: '',
    isTitleClicked: false,
    title: '',
    setIsTitleClicked: () => { },
    setTitle: () => { }
});

const HomeProvider = ({ children }: HomeProviderProps) => {
    const defaultTitle = 'Hi there!';

    const [title, setTitle] = useState(defaultTitle);
    const [isTitleClicked, setIsTitleClicked] = useState(false);


    const HomeValues: HomeValuesProps = useMemo(() => ({
        defaultTitle,
        isTitleClicked,
        title,
        setIsTitleClicked,
        setTitle,
    }), [isTitleClicked, title]);

    return (
        <HomeContext.Provider value={HomeValues}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHome = () => useContext(HomeContext);

export default HomeProvider;
