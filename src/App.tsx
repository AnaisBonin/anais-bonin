import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeProvider from './contexts/HomeProvider';
import Home from './pages/Home/Home';

import './App.css';

const App = () => (
  <HomeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </HomeProvider>
);

export default App;
