import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Trigger overlay or API call with search term
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