import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

export interface HomeStatesProps {
    title: string,
    setTitle: Dispatch<SetStateAction<string>> | (() => void),
}

export interface HomeProviderProps {
    children: ReactNode,
}

const HomeContext = createContext<HomeStatesProps>({
    title: '',
    setTitle: () => { }
});

const HomeProvider = ({ children }: HomeProviderProps) => {
    const [title, setTitle] = useState<string>("");

    const HomeStates: HomeStatesProps = useMemo(() => ({
        title,
        setTitle,
    }), [title]);

    return (
        <HomeContext.Provider value={HomeStates}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHome = () => useContext(HomeContext);

export default HomeProvider;
