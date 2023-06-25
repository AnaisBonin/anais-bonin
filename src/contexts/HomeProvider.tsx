import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

export interface HomeStatesProps {
    isTitleClicked: boolean,
    title: string,
    setIsTitleClicked: Dispatch<SetStateAction<boolean>> | (() => void),
    setTitle: Dispatch<SetStateAction<string>> | (() => void),
}

export interface HomeProviderProps {
    children: ReactNode,
}

const HomeContext = createContext<HomeStatesProps>({
    isTitleClicked: false,
    title: '',
    setIsTitleClicked: () => { },
    setTitle: () => { }
});

const HomeProvider = ({ children }: HomeProviderProps) => {
    const [title, setTitle] = useState("");
    const [isTitleClicked, setIsTitleClicked] = useState(false);

    const HomeStates: HomeStatesProps = useMemo(() => ({
        isTitleClicked,
        title,
        setIsTitleClicked,
        setTitle,
    }), [isTitleClicked, title]);

    return (
        <HomeContext.Provider value={HomeStates}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHome = () => useContext(HomeContext);

export default HomeProvider;
