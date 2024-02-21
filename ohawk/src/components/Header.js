import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

// Header component. Handles search and opens the overlay.
function Header({ onOpenOverlay, onSearchPhraseChange }) {

  const [searchTerm, setSearchTerm] = useState('');
 
  // Function to handle search
  const handleSearch = () => {
    console.log('Handling search of :', searchTerm);
    onSearchPhraseChange(searchTerm); // Update searchPhrase state in App component    
    onOpenOverlay(searchTerm); // Open the overlay
    };
  
  
  return (
    <header>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button onClick={handleSearch}>Search</Button>
    </header>
  );
}

export default Header;