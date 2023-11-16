import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomeProvider } from './contexts';
import { Contact, Home } from './pages';

import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Home />,
	},
	{
		path: 'contact',
		element: <Contact />,
	},
]);

const App = () => (
	<HomeProvider>
		<RouterProvider router={router} />
	</HomeProvider>
);

export default App;
