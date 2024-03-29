import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PanelsContainer from './components/PanelsContainer';
import FullscreenOverlay from './components/FullscreenOverlay';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PanelsContainer />} />
        <Route path="/overlay" element={<FullscreenOverlay />} />
      </Routes>
    </Router>
  );
}

export default App;