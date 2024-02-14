import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import FullscreenOverlay, { createOverlay } from './FullscreenOverlay.js';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const data = { searchPhrase: searchTerm };
  const handleSearch = () => {
    // Trigger overlay or API call with search term
    createOverlay(data);
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