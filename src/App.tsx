import {
	RouteObject,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

import { HomeProvider } from './contexts';
import { Home } from './pages';
import { portfolioPages } from './utils';

import './App.css';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
		errorElement: <Home />,
	},
];

portfolioPages.forEach(({ path, element: Element }) => {
	routes.push({
		path,
		element: <Element />,
	});
});

const router = createBrowserRouter([...routes]);

const App = () => (
	<HomeProvider>
		<RouterProvider router={router} />
	</HomeProvider>
);

export default App;
