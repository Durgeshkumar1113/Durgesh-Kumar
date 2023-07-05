import React from 'react';
import { Routes,BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage></HomePage>} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route path="/contact" element={<ContactPage></ContactPage>} />
      </Routes>
    </Router>
  );
};

export default App;
