import {
	RouteObject,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

import { HomeProvider } from './contexts';
import { portfolioPages } from './utils';
import Home from './pages/Home';
import { Error } from './pages';

import './App.css';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
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
