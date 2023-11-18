import {
	RouteObject,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

import { HomeProvider } from './contexts';
import { EnterUniverse } from './layouts';
import { portfolioPages } from './utils';
import Home from './pages/Home';
import { Error } from './pages';

import './App.css';

const childrenRoutes: RouteObject[] = [];

portfolioPages.forEach(({ path, element: Element }) => {
	childrenRoutes.push({
		path,
		element: <Element />,
	});
});

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: 'enter-universe',
		element: <EnterUniverse />,
		children: childrenRoutes,
	},
];

const router = createBrowserRouter(routes);

const App = () => (
	<HomeProvider>
		<RouterProvider router={router} />
	</HomeProvider>
);

export default App;
