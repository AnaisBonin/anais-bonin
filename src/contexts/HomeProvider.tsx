import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import HomeUtils from '../utils/HomeUtils';

export interface HomeValuesProps {
	defaultTitle: string;
	isTitleClicked: boolean;
	starSelected?: number;
	title: string;
	changeTitle: (value: string) => void;
	handleStarSelected: (star?: number) => void;
	handleTitleClicked: () => void;
}

export interface HomeProviderProps {
	children: ReactNode;
}

const HomeContext = createContext<HomeValuesProps>({
	defaultTitle: '',
	isTitleClicked: false,
	starSelected: undefined,
	title: '',
	changeTitle: (title: string) => title,
	handleStarSelected: (star?: number) => star,
	handleTitleClicked: () => {},
});

const HomeProvider = ({ children }: HomeProviderProps) => {
	const { defineTitle } = HomeUtils();

	const defaultTitle = 'Hi there!';

	const [isTitleClicked, setIsTitleClicked] = useState(false);
	const [starSelected, setStarSelected] = useState<number>();
	const [title, setTitle] = useState(defaultTitle);

	const changeTitle = (value: string) => setTitle(value);
	useEffect(() => defineTitle(starSelected), [starSelected, defineTitle]);

	const handleTitleClicked = useCallback(
		() => setIsTitleClicked(!isTitleClicked),
		[isTitleClicked]
	);
	const handleStarSelected = (star?: number) => star && setStarSelected(star);

	const HomeValues: HomeValuesProps = useMemo(
		() => ({
			defaultTitle,
			isTitleClicked,
			starSelected,
			title,
			changeTitle,
			handleStarSelected,
			handleTitleClicked,
		}),
		[isTitleClicked, starSelected, title, handleTitleClicked]
	);

	return (
		<HomeContext.Provider value={HomeValues}>{children}</HomeContext.Provider>
	);
};

export const useHome = () => useContext(HomeContext);

export default HomeProvider;
