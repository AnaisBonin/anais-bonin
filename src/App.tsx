import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeProvider from './contexts/HomeProvider';
import Contact from './pages/Contact/Contact';
import { Home } from './pages';

import './App.css';

const App = () => (
	<HomeProvider>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	</HomeProvider>
);

export default App;
