import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useMemo,
	useState,
} from 'react';

interface AppStatesProps {
	pageSelected?: string;
	setPageSelected?: Dispatch<SetStateAction<string>>;
}

interface AppProviderProps {
	children: ReactNode;
}

const AppContext = createContext<AppStatesProps>({});

const AppProvider = ({ children }: AppProviderProps) => {
	const [pageSelected, setPageSelected] = useState('');

	const AppStates: AppStatesProps = useMemo(
		() => ({
			pageSelected,
			setPageSelected,
		}),
		[pageSelected]
	);

	return (
		<AppContext.Provider value={AppStates}>{children}</AppContext.Provider>
	);
};

export const useApp = () => useContext(AppContext);

export default AppProvider;
