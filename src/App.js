import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import LandingPage from './components/LandingPage';
import Upload from './components/upload';
import Register from './components/register';
import Market from './components/market'


function App() {
  return (
      <Router>
          <div>
              <Header /> {/* Header displayed on all pages */}
              <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/upload" element={<Upload />} />
                  <Route path="/market" element={<Market />} />
                  <Route path="/register" element={<Register />} />
              </Routes>
          </div>
      </Router>
  );
}


export default App;
