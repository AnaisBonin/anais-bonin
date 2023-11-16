import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

interface HomeStatesProps {
	starSelected: string;
	handleStarSelection: (name: string) => void;
}

export interface HomeProviderProps {
	children: ReactNode;
}

const HomeContext = createContext<HomeStatesProps>({
	starSelected: '',
	handleStarSelection(name) {},
});

const HomeProvider = ({ children }: HomeProviderProps) => {
	const [starSelected, setStarSelected] = useState('');

	const handleStarSelection = (name: string) => setStarSelected(name);

	const HomeStates: HomeStatesProps = useMemo(
		() => ({
			starSelected,
			handleStarSelection,
		}),
		[starSelected]
	);

	return (
		<HomeContext.Provider value={HomeStates}>{children}</HomeContext.Provider>
	);
};

export const useHome = () => useContext(HomeContext);

export default HomeProvider;
