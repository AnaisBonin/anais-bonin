import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

interface HomeStatesProps {
    quantity?: number,
    setQuantity?: Dispatch<SetStateAction<number>>,
}

interface HomeProviderProps {
    children: ReactNode,
}

const HomeContext = createContext<HomeStatesProps>({});

const HomeProvider = ({ children }: HomeProviderProps) => {
    const [quantity, setQuantity] = useState(0);

    const HomeStates: HomeStatesProps = useMemo(() => ({
        quantity,
        setQuantity,
    }), [quantity]);

    return (
        <HomeContext.Provider value={HomeStates}>
            {children}
        </HomeContext.Provider>
    );
};

export const useApp = () => useContext(HomeContext);

export default HomeProvider;
