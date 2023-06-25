import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

interface AppStatesProps {
    quantity?: number,
    user?: string,
    setQuantity?: Dispatch<SetStateAction<number>>,
    setUser?: Dispatch<SetStateAction<string>>
}

interface AppProviderProps {
    children: ReactNode
}

const AppContext = createContext<AppStatesProps>({});

const AppProvider = ({ children }: AppProviderProps) => {
    const [user, setUser] = useState('');
    const [quantity, setQuantity] = useState(0);


    const AppStates: AppStatesProps = useMemo(() => ({
        quantity,
        user,
        setQuantity,
        setUser
    }), [quantity, user]);


    return (
        <AppContext.Provider value={AppStates}>
            {children}
        </AppContext.Provider>
    );
};


export const useApp = () => useContext(AppContext);


export default AppProvider;
