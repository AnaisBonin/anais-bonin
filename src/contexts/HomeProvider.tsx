import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface HomeStatesProps {
    starSelected?: number,
    handleStarSelection?: (star: number) => void,
}

interface HomeProviderProps {
    children: ReactNode,
}

const HomeContext = createContext<HomeStatesProps>({});

const HomeProvider = ({ children }: HomeProviderProps) => {
    const [starSelected, setStarSelected] = useState(0);

    const handleStarSelection = (star: number) => setStarSelected(star)

    const HomeStates: HomeStatesProps = useMemo(() => ({
        starSelected,
        handleStarSelection,
    }), [starSelected]);

    return (
        <HomeContext.Provider value={HomeStates}>
            {children}
        </HomeContext.Provider>
    );
};

export const useApp = () => useContext(HomeContext);

export default HomeProvider;
