/**
 * Main application component.
 * @returns {JSX.Element} The rendered application.
 */
import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PanelsContainer from './components/PanelsContainer';
import FullscreenOverlay from './components/FullscreenOverlay'; // Import FullscreenOverlay
import { create } from '@mui/material/styles/createTransitions';
import CreateOverlay from './components/FullscreenOverlay';

function App() {

  // state to control the visibility of overlay
  const [overlayOpen, setOverlayOpen] = useState(false); 

  // state to store the search phrase
  const [searchPhrase, setSearchPhrase] = useState('');
  console.log('searchPhrase in Appjs:', searchPhrase);
  
  // Function to close the overlay
  const handleOverlayClose = () => {
    setOverlayOpen(false);
  };

  // Function to open the overlay
  const handleOverlayOpen = (searchPhrase) => {
    setOverlayOpen(true);
    console.log('Executing CreateOverlay in App.js. Props are: ', searchPhrase, overlayOpen, handleOverlayClose);
    <CreateOverlay 
      searchPhrase={searchPhrase} 
      open={overlayOpen} 
      handleClose={handleOverlayClose} 
    />
  };
  
  return (
    <Router>
      <Header onOpenOverlay={handleOverlayOpen} onSearchPhraseChange={setSearchPhrase} />
      <Routes>
        <Route path="/" element={<PanelsContainer />} />
        <Route path="/overlay" element={<FullscreenOverlay />} />
      </Routes>
      {overlayOpen && <CreateOverlay searchPhrase={searchPhrase} open={overlayOpen} handleClose={handleOverlayClose} />}
    </Router>
  );
 
}

export default App;       